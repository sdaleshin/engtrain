App.module("HeaderApp.List", function (List, App, Backbone, Marionette, $, _) {
    List.Header = App.Views.ItemView.extend({
        template: "header/list/header",
        className: "container container-fluid",
        initialize: function (options) {
            this.listenTo(this, 'header:select:item', this.selectItem);
        },
        selectItem: function (itemName) {
            this.$('li').removeClass('active');
            this.$('li a[href="#' + itemName + '"]').parent().addClass('active');
        }
    }); 

});