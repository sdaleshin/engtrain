App.module('WordsApp', function (WordsApp, App, Backbone, Marionette, $, _) {
    'use strict';

    var API = {
        list: function () {
            new WordsApp.List.Controller({ region: App.mainRegion });
        },        
    };

    WordsApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            'words': 'list'
        }
    });

    App.addInitializer(function () {
        new WordsApp.Router({
            controller: API
        });
    });
});