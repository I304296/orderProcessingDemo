sap.ui.define(["sap/ui/test/opaQunit","com/mysap/ESPMUi5App/test/integration/pages/App"],function(e){"use strict";e("should show correct number of nested pages",function(e,p,t){e.iStartMyApp();t.onTheAppPage.iShouldSeePageCount(1);t.iTeardownMyApp()})});