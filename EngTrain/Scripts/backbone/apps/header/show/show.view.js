App.module("HeaderApp.Show", function (Show, App, Backbone, Marionette, $, _) {
    Show.LayoutView = App.Views.LayoutView.extend({
        template: 'header/show/layout',
        className: 'wrapper',
        onRender: function () {
            this.$el.attr('id', 'header-wrapper');
        }
    }); 

});