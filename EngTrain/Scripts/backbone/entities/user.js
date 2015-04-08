App.module("Entities", function (Entities, App, Backbone, Marionette, $, _) {
    "use strict";

    Entities.UserModel = Backbone.Model.extend({
        idAttribute: 'Id',
        initialize: function () {
            this.listenTo(this, 'change:Id', this.onIdChange);
            this.listenTo(this, 'change:UserName', this.onUserName);
            this.listenTo(this, 'change:Level', this.onLevelChange);
        },
        onIdChange: function () {
            localStorage['Id'] = this.get('Id');
        },
        onUserName: function () {
            localStorage['UserName'] = this.get('UserName');
        },
        onLevelChange: function () {
            localStorage['Level'] = this.get('Level');
        }
    });

    var API = {
        getUser: function () {
            if (!App.user) {
                var model = new Entities.UserModel();
                model.set('UserName', localStorage['UserName'] || model.generateGuid());
                model.set('Id', localStorage['Id']);
                model.set('Level', localStorage['Level'] || 'Intermediate');
                App.user = model;
            }
            return App.user;
            
        }
    };

    App.reqres.setHandler("user:entity", function () {
        return API.getUser();
    });

});