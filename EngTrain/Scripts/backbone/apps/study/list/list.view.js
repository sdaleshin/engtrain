App.module('StudyApp.List', function (List, App, Backbone, Marionette, $, _) {
    'use strict';

    List.LayoutView = App.Views.LayoutView.extend({
        template: 'study/list/layout',
        className: 'wrapper style2',
        triggers: {
            "click .btn-create-account":"create:account:click"
        }
    });

});