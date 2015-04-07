App.module('StudyApp', function (StudyApp, App, Backbone, Marionette, $, _) {
    'use strict';

    var API = {
        list: function () {
            new StudyApp.List.Controller({ region: App.mainRegion });
        },        
    };

    StudyApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            'study': 'list'
        }
    });

    App.addInitializer(function () {
        new StudyApp.Router({
            controller: API
        });
    });
});