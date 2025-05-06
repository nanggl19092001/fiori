import { Page$NavButtonPressEvent } from "sap/m/Page";
import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
import Event from "sap/ui/base/Event";
import { Route$PatternMatchedEvent } from "sap/ui/core/routing/Route";
import History from "sap/ui/core/routing/History";

export default class Detail extends Controller {
    onInit(): void | undefined {
        let oRouter = UIComponent.getRouterFor(this);
        oRouter.getRoute("detail")?.attachPatternMatched(this._onObjectMatched, this);
    }

    onNavPress(oEvent: Page$NavButtonPressEvent): void {
        let oHistory = History.getInstance();
        let sPreviousHash = oHistory.getPreviousHash();
        let oRouter = (this.getOwnerComponent() as UIComponent)?.getRouter();
        if( sPreviousHash !== undefined){
            window.history.go(-1);
        } else {
            oRouter.navTo("walkthrough");
        }
    }

    _onObjectMatched(oEvent: Route$PatternMatchedEvent): void | undefined {
        this.getView()?.bindElement({
            path: "/" + window.decodeURIComponent((oEvent.getParameter("arguments") as any)?.invoicePath),
            model: "invoice"
        })
    }
}