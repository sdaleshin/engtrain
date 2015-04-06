var App = (function (Backbone, Marionette) {
    "use strict";

    var App = new Marionette.Application();

    App.on("initialize:before", function (options) {
        App.environment = options.environment;
        if (options.currentUser) {
            App.request('user:set:currentUser', options.currentUser);
        }
        if (options.clientSettings) {
            App.request('set:clientSettings', options.clientSettings);
        }
        if (options.wizardData) {
            App.request('set:wizardData', options.wizardData);
        }
        if (options.permissions) {
            App.request('set:permissions', options.permissions);
        }
        if (options.page) {
            App.page = options.page;
        }
        if (options.metaData) {
            App.request('set:metaData', options.metaData);
        }
        
        if (options.buildInfo) {
            App.buildInfo = options.buildInfo;
        }

        App.request('get:clientAppSettings')
    });

    App.addRegions({
        headerRegion: "#header-region",
        mainRegion: "#main-region",
        mainRegion2: "#main-region-2",
        mainRegion3: "#main-region-3",
        footerRegion: "#footer-region",
        alertRegion: "#alert-region",
        alertModalRegion: "#alert-modal-region"
    });

    var API = {
        redirectTo: function (asd) {
            window.location = '/Errors/Error404.html';
        },
        home: function () {
        },
        onHashChange: function () {
            var model = App.request('get:clientAppSettings');
            model.set('Route', location.hash);
            App.request('save:clientAppSettings', { model: model });
        }
    };

    App.Router = Marionette.AppRouter.extend({
        appRoutes: {
            '(/)': 'home',
            '*asd': 'redirectTo'
        }
    });

    App.addInitializer(function () {
        App.module("AuthApp").start();

        App.module("HeaderApp").start();
        App.module("UsersApp").start();

        //App.execute("when:fetched", meta, function () {
        //    // logged in
        //    App.module("HeaderApp").start();
        //    App.module("UsersApp").start();
        //    App.triggerMethod('initialize:proceed');
        //});
        //App.execute("when:error", meta, function () {
        //    // not logged in
        //    console.log('error');
        //    App.module("HeaderApp").start();
        //    App.module("UsersApp").start();
        //    App.triggerMethod('initialize:proceed');
        //});
        //App.module("FooterApp").start();

        new App.Router({
            controller: API
        });
    });

    App.reqres.setHandler("default:region", function () {
        return App.mainRegion;
    });


    App.commands.setHandler("register:instance", function (instance, id) {
        if (App.environment == "development") {
            App.register(instance, id);
        }

    });

    App.commands.setHandler("unregister:instance", function (instance, id) {
        if (App.environment == "development") {
            App.unregister(instance, id);
        }
    });

    //App.on("initialize:proceed", function () {
    App.on("initialize:after", function () {
        this.startHistory();
        if (!this.getCurrentRoute()) {
            var clientSettings = App.request('get:clientAppSettings');
            var route = clientSettings && clientSettings.get('Route') || this.rootRoute;
            this.navigate(route, { trigger: true });
        }
        $(window).on('hashchange', API.onHashChange);
    });

    return App;

})(Backbone, Marionette);