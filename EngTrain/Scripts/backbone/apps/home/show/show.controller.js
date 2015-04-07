App.module('HomeApp.Show', function (Show, App, Backbone, Marionette, $, _) {
    'use strict';

    Show.Controller = App.Controllers.Base.extend({
        initialize: function (options) {
            this.layoutView = this.getLayoutView();
            this.show(this.layoutView);
            $('body').addClass('homepage');
        },
        getLayoutView: function () {
            return new Show.LayoutView();
        },
        onDestroy: function () {
            $('body').removeClass('homepage');
        }
    });
});