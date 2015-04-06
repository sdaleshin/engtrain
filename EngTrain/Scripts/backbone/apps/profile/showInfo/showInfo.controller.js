App.module("ProfileApp.ShowInfo", function (ShowInfo, App, Backbone, Marionette, $, _) {
    "use strict";

    ShowInfo.Controller = App.Controllers.Base.extend({
        initialize: function (options) {
            this.currentUser = App.request("user:currentUser");
            this.data = App.request("auditDataCurrent:entities");
            this.infoView = this.getCurrentUserInfoView();
            this.listenTo(this.infoView, 'show', this.showRegions)

            this.show(this.infoView);
        },

        showRegions: function () {
            var rolesView = new App.Select2Many.Select2Many({
                model: this.currentUser,
                property: 'Roles',
                target: 'SecurityRole',
                showPropName: 'Name',
                useWithoutSchema: true,
                enable: false,
                placeholder: ''
            });

            var settingsView = new ShowInfo.Settings();


            var activityLines = new App.Entities.Collection(null, { model: App.Entities.Model });
            _.forEach(this.currentUser.get('Roles'), function (role) {
                if (role.SecurityRole && role.SecurityRole.ActivityLine) {
                    activityLines.add(role.SecurityRole.ActivityLine);
                }
            });

            var activityLinesView = new ShowInfo.ActivityLinesView({
                collection: activityLines
            });

            var systemInfoView = new ShowInfo.SystemInfo({
                model: new Backbone.Model(App.buildInfo)
            });

            this.grid = this.getGridView();

            this.infoView.roles.show(rolesView);
            this.infoView.settings.show(settingsView);
            this.infoView.activityLines.show(activityLinesView);
            this.infoView.systemInfo.show(systemInfoView);
            this.infoView.activityInfo.show(this.grid);
        },

        getMasterDetailsGridView: function () {
            return ShowInfo.MasterDetailsView;
        },

        getGridView: function () {
            return new App.Grid.Grid({
                collection: this.data,
                columns: App.request("auditData:columnsForUser"),
                masterDetailsView: this.getMasterDetailsGridView(),
                dragable: true,
                resizeable: true,
                name: 'AuditData',
                visible: true,
                menu: true,
                sortable: true,
                filter: true,
                footer: {
                    //multisort: true,
                    //paginator: true,

                },
                paginator: true
            });
        },

        getCurrentUserInfoView: function () {
            return new ShowInfo.CurrentUserInfoView({ model: this.currentUser });
        }
    });
});