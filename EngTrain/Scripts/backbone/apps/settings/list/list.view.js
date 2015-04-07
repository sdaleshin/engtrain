App.module('SettingsApp.List', function (List, App, Backbone, Marionette, $, _) {
    'use strict';

    List.LayoutView = App.Views.LayoutView.extend({
        template: 'settings/list/layout',
        className: 'wrapper style2'
    });

});