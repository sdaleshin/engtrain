App.module('FilmsApp.List', function (List, App, Backbone, Marionette, $, _) {
    'use strict';

    List.LayoutView = App.Views.LayoutView.extend({
        template: 'films/list/layout',
        className: 'wrapper style2'
    });

});