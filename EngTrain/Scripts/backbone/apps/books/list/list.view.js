App.module('BooksApp.List', function (List, App, Backbone, Marionette, $, _) {
    'use strict';

    List.LayoutView = App.Views.LayoutView.extend({
        template: 'books/list/layout',
        className: 'wrapper style2'
    });

});