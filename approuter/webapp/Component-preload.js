//@ui5-bundle ESPMUi5App/Component-preload.js
sap.ui.require.preload({
	"ESPMUi5App/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","com/mysap/ESPMUi5App/model/models"],function(e,i,t){"use strict";return e.extend("com.mysap.ESPMUi5App.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});
},
	"ESPMUi5App/controller/BaseController.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/ui/core/UIComponent","com/mysap/ESPMUi5App/model/formatter"],function(e,t,o,n){"use strict";return e.extend("com.mysap.ESPMUi5App.controller.BaseController",{formatter:n,getModel:function(e){return this.getView().getModel(e)},setModel:function(e,t){return this.getView().setModel(e,t)},getResourceBundle:function(){return this.getOwnerComponent().getModel("i18n").getResourceBundle()},navTo:function(e,t,o){this.getRouter().navTo(e,t,o)},getRouter:function(){return o.getRouterFor(this)},onNavBack:function(){var e=t.getInstance().getPreviousHash();if(e!==undefined){window.history.back()}else{this.getRouter().navTo("appHome",{},true)}}})});
},
	"ESPMUi5App/controller/MainView.controller.js":function(){sap.ui.define(["com/mysap/ESPMUi5App/controller/BaseController","sap/m/MessageBox"],function(e,o){"use strict";var t="ESPM";var s;var n;var a;return e.extend("com.mysap.ESPMUi5App.controller.MainView",{onInit:function(){$.ajax({url:"/"+t+"/gw/odata/SAP/S4PRODUCTODATASRV;v=1/ProductSet?top=10",type:"GET",contentType:"application/json",async:false,success:function(e){a.close();n=JSON.parse(e.Result[0]);s.getView().setModel(new sap.ui.model.json.JSONModel(n))},error:function(){}})},handleListItemPress:function(e){o.show("You pressed item: "+e.getSource().getBindingContext(),{icon:sap.m.MessageBox.Icon.INFORMATION,title:"It works!",actions:[sap.m.MessageBox.Action.OK]})}})});
},
	"ESPMUi5App/i18n/i18n.properties":'title=ESPMUi5App\nappTitle=ESPMUi5App\nappDescription=App Description\n',
	"ESPMUi5App/i18n/i18n_en.properties":'title=ESPMUi5App\nappTitle=ESPMUi5App\nappDescription=App Description\n',
	"ESPMUi5App/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"ESPMUi5App","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","dataSources":{"ESPM.svc":{"uri":"/gw/odata/SAP/S4PRODUCTODATASRV;v=1/","type":"OData"},"Northwind.svc":{"uri":"/Northwind/V2/Northwind/Northwind.svc/","type":"OData"}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"com.mysap.ESPMUi5App.view.MainView","type":"XML","async":true,"id":"idAppControl"},"dependencies":{"minUI5Version":"1.60.0","libs":{"sap.ui.core":{},"sap.m":{},"sap.ui.layout":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"":{"type":"sap.ui.model.odata.v2.ODataModel","dataSource":"Northwind.svc","preload":true},"ESPM":{"type":"sap.ui.model.odata.v2.ODataModel","dataSource":"ESPM.svc","preload":true},"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.mysap.ESPMUi5App.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","viewPath":"com.mysap.ESPMUi5App.view","controlId":"idAppControl","controlAggregation":"pages","async":true},"routes":[{"name":"RouteMainView","pattern":"RouteMainView","target":["TargetMainView"]}],"targets":{"TargetMainView":{"viewType":"XML","viewLevel":1,"viewName":"MainView"}}}}}',
	"ESPMUi5App/model/formatter.js":function(){sap.ui.define([],function(){"use strict";return{}});
},
	"ESPMUi5App/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"ESPMUi5App/view/MainView.view.xml":' <mvc:View controllerName="com.mysap.ESPMUi5App.controller.MainView"\n  displayBlock="true"\n  xmlns="sap.m"\n  xmlns:mvc="sap.ui.core.mvc"><App id="idAppControl" ><pages><Page title="{i18n>title}"><content><List items="{/Products}"><StandardListItem type="Active" press="handleListItemPress" title="{ProductName}"/></List></content></Page></pages></App></mvc:View>\n'
});
