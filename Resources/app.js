(function () {
	var osName = Ti.Platform.osname;
	Ti.API.info(osName);
	
	var ApplicationTabGroup = require('ui/common/ApplicationTabGroup'),
		tabGroup = new ApplicationTabGroup();
	tabGroup.open();
}());
