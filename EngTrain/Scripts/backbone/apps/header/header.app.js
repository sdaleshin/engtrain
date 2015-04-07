App.module('HeaderApp', function (HeaderApp, App, Backbone, Marionette, $, _) {
    'use strict';

    var API = {
        show: function () {
            new HeaderApp.Show.Controller({ region: App.headerRegion });
        }
    };

    App.addInitializer(function () {
        //API.show();
    });
});