App.module('SettingsApp', function (SettingsApp, App, Backbone, Marionette, $, _) {
    'use strict';

    var API = {
        list: function () {
            new SettingsApp.List.Controller({ region: App.mainRegion });
        },        
    };

    SettingsApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            'settings': 'list'
        }
    });

    App.addInitializer(function () {
        new SettingsApp.Router({
            controller: API
        });
    });
});