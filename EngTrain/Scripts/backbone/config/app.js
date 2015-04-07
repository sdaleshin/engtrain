var App = (function (Backbone, Marionette) {
    "use strict";

    var App = new Marionette.Application();

    App.addRegions({
        headerRegion: "#header-region",
        mainRegion: "#main-region",
    });

    App.on("start", function () {
        this.startHistory();
    });

    return App;

})(Backbone, Marionette);