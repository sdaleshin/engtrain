App.module("HeaderApp.List", function (List, App, Backbone, Marionette, $, _) {
    List.Controller = App.Controllers.Base.extend({
        initialize: function () {
            this.currentUser = App.request("user:currentUser");
            this.listView = this.getListView();
            this.show(this.listView, { loading: false });            
            App.vent.on('header:menu:chosen', this.selectItem, this);
        },

        selectItem: function (selectedItem) {            
            this.listView.trigger('header:select:item', selectedItem);            
        },

        getListView: function () {
            return new List.Header({ model: this.currentUser });
        },

        onClose: function () {
            App.vent.off('header:menu:chosen', this.selectItem, this);
        }

    });
});