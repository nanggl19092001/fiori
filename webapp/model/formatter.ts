import Controller from "sap/ui/core/mvc/Controller"
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
export default {
    statusText: function (this: Controller, status: string): string | undefined {
        const resourceBundle = (this?.getOwnerComponent()?.getModel("i18n") as ResourceModel)?.getResourceBundle() as ResourceBundle;
        switch (status) {
            case "A":
                return resourceBundle.getText("statusAText");
            case "B":
                return resourceBundle.getText("statusBText");
            case "C":
                return resourceBundle.getText("statusCText");
            default:
                return;
        }
    }
}