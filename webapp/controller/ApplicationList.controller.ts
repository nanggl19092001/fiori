import MessageToast from "sap/m/MessageToast";
import { Tile$PressEvent } from "sap/m/Tile";
import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";

export default class ApplicationList extends Controller {
    onPress(oEvent: Tile$PressEvent) {
        let sDestination: any = oEvent.getSource().getBindingContext("capAppList")?.getObject();
        let oNav = (this.getOwnerComponent() as UIComponent)?.getRouter();
        if (sDestination != undefined && oNav.getRoute(sDestination.path) != undefined) {
            oNav.navTo(<string>sDestination.path);
            return;
        }

        MessageToast.show("Application not yet implemented");
    }
}