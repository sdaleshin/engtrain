App.module("ProfileApp.ShowInfo", function (ShowInfo, App, Backbone, Marionette, $, _) {
    "use strict";

    ShowInfo.CurrentUserInfoView = App.Views.LayoutView.extend({
        template: "profile/showInfo/current-user-info",
        regions: {
            roles: '.roles',
            settings: '.control-settings',
            activityLines: '.activity-lines',
            systemInfo: '.system-info',
            activityInfo: '.activity-info'
        }
    });

    ShowInfo.Settings = App.Views.ItemView.extend({
        template: "profile/showInfo/settings",
        ui: {
            confirmModal: '.clear-grid-setting-modal',
            clearGridSettingsOkBtn: '.clear-gridsettings-ok',
            clearGridSettingsCancelBtn: '.clear-grid-setting-cancel',
            confirmClearGridSettingsBtn: '.clear-grid-setting',
            errorModal: '.clear-grid-setting-error-modal',
            successModal: '.clear-grid-setting-success-modal',
        },

        events: {
            'click @ui.confirmClearGridSettingsBtn': 'confirmClearGridSettings',
            'click @ui.clearGridSettingsOkBtn': 'clearGridSettings'
        },

        confirmClearGridSettings: function () {
            this.ui.confirmModal.on('click', '.clear-gridsettings-ok', _.bind(this.clearGridSettings, this));
            this.ui.confirmModal.modal('show');
            
        },

        clearGridSettings: function () {
            $.ajax({
                url: 'api/GridSettings/ClearGridSettings',
                contentType: 'application/json',
                method: 'POST',
                success: _.bind(this.onSuccessCleaning, this),
                error: _.bind(this.onErrorCleaning, this)
            });
        },

        onSuccessCleaning: function () {
            this.ui.confirmModal.modal('hide');
            this.ui.successModal.modal('show');
        },

        onErrorCleaning: function () {
            this.ui.confirmModal.modal('hide');
            this.ui.errorModal.modal('show');
        },
    });

    ShowInfo.ActivityLineView = App.Views.ItemView.extend({
        template: "profile/showInfo/activity-line"
    });

    ShowInfo.ActivityLineEmpty = App.Views.ItemView.extend({
        template: "profile/showInfo/activity-line-empty"
    });

    ShowInfo.SystemInfo = App.Views.ItemView.extend({
        template: "profile/showInfo/system-info"
    });


    ShowInfo.ActivityLinesView = App.Views.CollectionView.extend({
        className:'asd',
        //template: "profile/showInfo/activity-lines",
        itemView: ShowInfo.ActivityLineView,
        emptyView: ShowInfo.ActivityLineEmpty        
    });

    ShowInfo.MasterDetailsView = App.Views.ItemView.extend({
        template: 'profile/showInfo/md',
    });

});