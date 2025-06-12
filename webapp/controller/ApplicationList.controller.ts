import { Button$PressEvent } from "sap/m/Button";
import MessageToast from "sap/m/MessageToast";
import { Tile$PressEvent } from "sap/m/Tile";
import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
import ODataModel from "sap/ui/model/odata/v4/ODataModel";

export default class ApplicationList extends Controller {
    onInit(): void {
        let oModel = new ODataModel({
            serviceUrl: "/app/App/",
            odataVersion: "4.0"
        });
    }

    onPress(oEvent: Tile$PressEvent): void {
        let sDestination: any = oEvent.getSource().getBindingContext("capAppList")?.getObject();
        let oNav = (this.getOwnerComponent() as UIComponent)?.getRouter();
        if (sDestination != undefined && oNav.getRoute(sDestination.path) != undefined) {
            oNav.navTo(<string>sDestination.path);
            return;
        }

        MessageToast.show("Application not yet implemented");
    }

    onRefresh(oEvent: Button$PressEvent) {

        this.getView()?.byId("appPanel")?.getModel("capAppList")?.refresh();
    }
}