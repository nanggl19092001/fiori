import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import Filter from "sap/ui/model/Filter";
import { SearchField$SearchEvent } from "sap/m/SearchField";
import FilterOperator from "sap/ui/model/FilterOperator";
import ListBinding from "sap/ui/model/Binding";
import formatter from "../model/formatter";
import UIComponent from "sap/ui/core/UIComponent";

export default class InvoiceController extends Controller {
    formatterFunction = formatter.statusText;
    onInit(): void{
        let oCurrModel: JSONModel =  new JSONModel({
            curr: 'EUR'
        });

        this.getView()?.setModel(oCurrModel,"curr");
    }

    onSearchField(oEvent: SearchField$SearchEvent): void{
        let aFilter: Filter[] | undefined = [];
        let sQuery: string | undefined = oEvent.getParameter("query");
        if (sQuery) {
            aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
        }

        let oList = this.byId("invoiceList");
        let oBinding: any = oList?.getBinding("items") as ListBinding;
        oBinding?.filter(aFilter);
    }

    onNavigate(oEvent: any): void{
        let oNav = (this.getOwnerComponent() as UIComponent)?.getRouter();
        oNav.navTo("detail");
    }
}