App.module("Entities", function (Entities, App, Backbone, Marionette, $, _) {
    "use strict";

    Entities.UserModel = Backbone.Model.extend({
    });

    var API = {
        getCurrentUser: function () {
            return App.currentUser;
        },
        setCurrentUser: function (data) {
            App.currentUser = new Entities.UserModel(data);
        }
    };

    App.reqres.setHandler("user:currentUser", function () {
        return API.getCurrentUser();
    });

    App.reqres.setHandler("user:set:currentUser", function (data) {
        return API.setCurrentUser(data);
    });


});