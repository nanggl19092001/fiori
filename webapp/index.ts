import XMLView from "sap/ui/core/mvc/XMLView";

XMLView.create({
    viewName: "fiori.walkthrough.view.App"
}).then((view: XMLView) => {
    view.placeAt("content");
})