App.module('StudyApp.List', function (List, App, Backbone, Marionette, $, _) {
    'use strict';

    List.Controller = App.Controllers.Base.extend({
        initialize: function (options) {
            this.user = App.request('user:entity');
            this.layoutView = this.getLayoutView();
            this.listenTo(this.layoutView, 'create:account:click', this.onCreateAccountClick);
            this.show(this.layoutView);
        },
        onCreateAccountClick: function () {
            this.user.save(null, {
                url:'/Account/Register',
                success: function () {
                    App.navigate('settings', { trigger: true });
                }
            });
            
        },
        getLayoutView: function () {
            return new List.LayoutView();
        }
    });
});