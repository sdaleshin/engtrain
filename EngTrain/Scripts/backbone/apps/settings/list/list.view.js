App.module('SettingsApp.List', function (List, App, Backbone, Marionette, $, _) {
    'use strict';

    List.LayoutView = App.Views.LayoutView.extend({
        template: 'settings/list/layout',
        className: 'wrapper style2',
        events: {
            'click .level-description': 'onLevelDescriptionClick'
        },
        markSelectedLevel: function (level) {
            this.$('section').removeClass('selected');
            this.$('section[data-level=' + level + ']').addClass('selected');
        },
        onLevelDescriptionClick: function (e) {
            var level = this.$(e.currentTarget).data('level');
            this.markSelectedLevel(level);
            this.trigger('level:change', level);
        },
        onRender: function () {
            this.markSelectedLevel(this.model.get('Level'));
        }
    });

});