App.module('WordsApp.List', function (List, App, Backbone, Marionette, $, _) {
    'use strict';

    List.LayoutView = App.Views.LayoutView.extend({
        template: 'words/list/layout',
        className: 'wrapper style2'
    });

});