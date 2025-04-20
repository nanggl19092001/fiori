import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
/**
 * @name fiori.walkthrough.controller.App
 */
export default class AppController extends Controller{
    onInit(): void{
        let oThisScopeObj: AppController = this;
        fetch("https://timeapi.io/api/time/current/zone?timeZone=Asia/Ho_Chi_Minh")
        .then((res: Response) => res.json())
        .then((json: Object) => {
            oThisScopeObj.getView()?.setModel(new JSONModel(json));
        })

        const i18nModel = new ResourceModel({
            bundleName: "fiori.walkthrough.i18n.i18n"
        });
        this.getView()?.setModel(i18nModel, "i18n");
    }
    onPressHello(): void{
        const yearVal: string = (this.getView()?.getModel() as JSONModel)?.getProperty("/year");
        const oResourceBundle: ResourceBundle = (this.getView()?.getModel("i18n") as ResourceModel)?.getResourceBundle() as ResourceBundle;
        const yearConv = oResourceBundle.getText("helloMsg", [yearVal]) || "";
        MessageToast.show(yearConv);
    }
}