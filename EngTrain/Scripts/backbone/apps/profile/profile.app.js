App.module("ProfileApp", function (ProfileApp, App, Backbone, Marionette, $, _) {
    "use strict";
    this.startWithParent = false;

    this.selectHeader = function () {
        App.vent.trigger('header:menu:chosen', 'Profile');
    };

    var API = {
        showInfo: function () {            
            new ProfileApp.ShowInfo.Controller({ region: App.mainRegion });
            ProfileApp.selectHeader();
        },        
    };

    ProfileApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "Profile(/)": "showInfo"
        }
    });

    App.addInitializer(function () {
        new ProfileApp.Router({
            controller: API
        });
    });
});