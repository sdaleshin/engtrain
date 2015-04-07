App.module('WordsApp.List', function (List, App, Backbone, Marionette, $, _) {
    'use strict';

    List.Controller = App.Controllers.Base.extend({
        initialize: function (options) {
            this.layoutView = this.getLayoutView();
            this.show(this.layoutView);
        },
        getLayoutView: function () {
            return new List.LayoutView();
        }
    });
});