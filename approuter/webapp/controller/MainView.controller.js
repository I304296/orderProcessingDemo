sap.ui.define(["com/mysap/ESPMUi5App/controller/BaseController","sap/m/MessageBox"],function(e,o){"use strict";var t="ESPM";var s;var n;var a;return e.extend("com.mysap.ESPMUi5App.controller.MainView",{onInit:function(){$.ajax({url:"/"+t+"/gw/odata/SAP/S4PRODUCTODATASRV;v=1/ProductSet?top=10",type:"GET",contentType:"application/json",async:false,success:function(e){a.close();n=JSON.parse(e.Result[0]);s.getView().setModel(new sap.ui.model.json.JSONModel(n))},error:function(){}})},handleListItemPress:function(e){o.show("You pressed item: "+e.getSource().getBindingContext(),{icon:sap.m.MessageBox.Icon.INFORMATION,title:"It works!",actions:[sap.m.MessageBox.Action.OK]})}})});