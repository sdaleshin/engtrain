App.module('SettingsApp.List', function (List, App, Backbone, Marionette, $, _) {
    'use strict';

    List.Controller = App.Controllers.Base.extend({
        initialize: function (options) {
            this.user = App.request('user:entity');
            this.layoutView = this.getLayoutView();
            this.listenTo(this.layoutView, 'level:change', this.onLevelChange);
            this.show(this.layoutView);
        },
        onLevelChange: function(level){
            this.user.set('Level',level);
            this.user.save(null, {
                url: '/Account/ChangeLevel'
            });
        },
        getLayoutView: function () {
            return new List.LayoutView({ model: this.user });
        }
    });
});