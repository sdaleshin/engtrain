App.module('FilmsApp', function (FilmsApp, App, Backbone, Marionette, $, _) {
    'use strict';

    var API = {
        list: function () {
            new FilmsApp.List.Controller({ region: App.mainRegion });
        },        
    };

    FilmsApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            'films': 'list'
        }
    });

    App.addInitializer(function () {
        new FilmsApp.Router({
            controller: API
        });
    });
});