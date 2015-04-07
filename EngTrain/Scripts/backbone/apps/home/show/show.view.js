App.module('HomeApp.Show', function (Show, App, Backbone, Marionette, $, _) {
    'use strict';

    Show.LayoutView= App.Views.LayoutView.extend({
        template: 'home/show/layout',
        className: 'wrapper style1'
    });

});