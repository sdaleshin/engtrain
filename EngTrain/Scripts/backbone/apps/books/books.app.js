App.module('BooksApp', function (BooksApp, App, Backbone, Marionette, $, _) {
    'use strict';

    var API = {
        list: function () {
            new BooksApp.List.Controller({ region: App.mainRegion });
        },        
    };

    BooksApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            'books': 'list'
        }
    });

    App.addInitializer(function () {
        new BooksApp.Router({
            controller: API
        });
    });
});