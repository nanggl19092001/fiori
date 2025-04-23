import MessageToast from "sap/m/MessageToast";
import { Tile$PressEvent } from "sap/m/Tile";
import Event from "sap/ui/base/Event";
import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";

export default class ApplicationList extends Controller {
    onPress(oEvent: Tile$PressEvent){
        let sDestination = this.getView()?.getLocalId(oEvent.getSource().getId());
        let oNav = (this.getOwnerComponent() as UIComponent)?.getRouter();
        if (sDestination != undefined){
            oNav.navTo(<string> sDestination);
        }
    }
}