import { Page$NavButtonPressEvent } from "sap/m/Page";
import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
/**
 * @name fiori.walkthrough.controller.Overview
 */
export default class OverviewController extends Controller{
    onNavPress(oEvent: Page$NavButtonPressEvent): void {
        let oRouter = (this.getOwnerComponent() as UIComponent)?.getRouter();
        oRouter.navTo("application");
    }
}