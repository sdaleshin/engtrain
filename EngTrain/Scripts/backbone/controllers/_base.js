App.module("Controllers", function (Controllers, App, Backbone, Marionette, $, _) {

    var base = Marionette.Controller.prototype;

    Controllers.Base = Marionette.Controller.extend({
        constructor: function (options) {
            options || (options = {});
            this.region = options.region || App.request("default:region");
            base.constructor.call(this, options);
        },

        destroy: function () {
            delete this.region
            delete this.options
            base.destroy.apply(this, arguments);
        },

        show: function (view, options) {
            options || (options = {});

            _.defaults(options, {
                loading: false,
                region: this.region
            });

            this._setMainView(view);
            this._manageView(view, options);
        },

        _setMainView: function (view) {
            if (!this._mainView) {
                this._mainView = view;
                this.listenTo(view, 'destroy', this.destroy);
            }
        },

        _manageView: function (view, options) {
            if (options.loading) {
                App.execute('show:loading', view, options);
            } else {
                options.region.show(view);
            }
        }
    });

});
    