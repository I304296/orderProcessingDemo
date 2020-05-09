sap.ui.define([
  "com/mysap/ESPMUi5App/controller/BaseController",
  "sap/m/MessageBox"
], function(Controller, MessageBox) {
  "use strict";
  var destinationName = "ESPM";
  var oController;
  //var viewModel = oController.getView().getModel().oData;
  var viewModel;
	var _orderBusyDialog;
  return Controller.extend("com.mysap.ESPMUi5App.controller.MainView", {
  onInit: function () {
      $.ajax({
				url: "/" + destinationName + "/gw/odata/SAP/S4PRODUCTODATASRV;v=1/ProductSet?top=10",
				type: "GET",
				contentType: "application/json",
				async: false,
				success: function (data) {
					_orderBusyDialog.close();
				//	var viewModel = oController.getView().getModel().oData;
                    viewModel = JSON.parse(data.Result[0]);
                 //   var x = JSON.parse(data.Result[0]);
                    oController.getView().setModel(new sap.ui.model.json.JSONModel(viewModel));
                    //console.log(x);
				},
				error: function () {
				//	_orderBusyDialog.close();
				}
			});


  },

		// show in a pop-up which list element was pressed
		handleListItemPress: function (oEvent) {

			MessageBox.show("You pressed item: " + oEvent.getSource().getBindingContext(), {
				icon: sap.m.MessageBox.Icon.INFORMATION,
				title: "It works!",
				actions: [sap.m.MessageBox.Action.OK]
			});
		}
  });
});
