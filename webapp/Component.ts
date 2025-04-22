import UIComponent from "sap/ui/core/UIComponent";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";

/**
* @namespace fiori.walkthrough
*/

export default class Component extends UIComponent {
    public static metadata = {
        "interfaces": ["sap.ui.core.IAsyncContentCreation"],
        "manifest": "json"
        };

    init(): void{

        super.init();

        let oThisScopeObj: Component = this;
        fetch("https://timeapi.io/api/time/current/zone?timeZone=Asia/Ho_Chi_Minh")
        .then((res: Response) => res.json())
        .then((json: Object) => {
            oThisScopeObj.setModel(new JSONModel(json));
        })

        const i18nModel = new ResourceModel({
            bundleName: "fiori.walkthrough.i18n.i18n"
        });
        this.setModel(i18nModel, "i18n");

        this.getRouter().initialize();
    }

    
};