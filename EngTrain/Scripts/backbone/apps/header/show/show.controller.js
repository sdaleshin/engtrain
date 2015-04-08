App.module("HeaderApp.Show", function (Show, App, Backbone, Marionette, $, _) {
    Show.Controller = App.Controllers.Base.extend({
        initialize: function () {
            localStorage.clear();
            App.user = null;
            this.layoutView = this.getLayoutView();
            this.show(this.layoutView);
        },
        getLayoutView: function () {
            return new Show.LayoutView();
        }
    });
});