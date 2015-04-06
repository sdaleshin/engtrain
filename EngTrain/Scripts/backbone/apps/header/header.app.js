﻿App.module("HeaderApp", function (HeaderApp, App, Backbone, Marionette, $, _) {
    "use strict";
    this.startWithParent = false;

    var API = {
        list: function () {
            new HeaderApp.List.Controller({ region: App.headerRegion });
        }
    };

    HeaderApp.on("start", function () {
        API.list();
    });
});