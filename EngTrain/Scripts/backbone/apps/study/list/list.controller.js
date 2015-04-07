App.module('StudyApp.List', function (List, App, Backbone, Marionette, $, _) {
    'use strict';

    List.Controller = App.Controllers.Base.extend({
        initialize: function (options) {
            this.layoutView = this.getLayoutView();
            this.listenTo(this.layoutView, 'create:account:click', this.onCreateAccountClick);
            this.show(this.layoutView);
        },
        onCreateAccountClick: function () {
            App.navigate('settings', { trigger: true });
        },
        getLayoutView: function () {
            return new List.LayoutView();
        }
    });
});