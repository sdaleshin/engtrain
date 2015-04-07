App.module('HomeApp', function (HomeApp, App, Backbone, Marionette, $, _) {
    'use strict';

    var API = {
        show: function () {
            new HomeApp.Show.Controller({ region: App.mainRegion });
        },        
    };

    HomeApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            '': 'show'
        }
    });

    App.addInitializer(function () {
        new HomeApp.Router({
            controller: API
        });
    });
});