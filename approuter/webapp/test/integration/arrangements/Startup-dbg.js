sap.ui.define([
  "sap/ui/test/Opa5"
], function(Opa5) {
  "use strict";

  return Opa5.extend("com.mysap.ESPMUi5App.test.integration.arrangements.Startup", {

    iStartMyApp: function () {
      this.iStartMyUIComponent({
        componentConfig: {
          name: "com.mysap.ESPMUi5App",
          async: true,
          manifest: true
        }
      });
    }

  });
});
