import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import Control from "sap/ui/core/Control";
import Fragment from "sap/ui/core/Fragment";
/**
 * @name fiori.walkthrough.controller.HelloPanel
 */
export default class HelloPanelController extends Controller{
    private pDialog: Promise<Control | Control[]> | null;

    onPressHello(): void{
        const yearVal: string = (<JSONModel> this.getView()?.getModel() as JSONModel)?.getProperty("/year");
        const oResourceBundle = <ResourceBundle> (<ResourceModel> this.getView()?.getModel("i18n"))?.getResourceBundle();
        const yearConv = oResourceBundle.getText("helloMsg", [yearVal]) || "";
        MessageToast.show(yearConv);
    }

    onPressDialogHello(): void{
        if(!this.pDialog){
            this.pDialog = this.loadFragment({
                name: "fiori.walkthrough.view.fragment.HelloDialog"
            });
        }
        this.pDialog.then((oDialog: any) => {
            oDialog.open();
        });
    }
    onCloseHelloDialog(): void{
        let oDialog = this.byId("helloDialog") as any;
        oDialog.close();
    }
}