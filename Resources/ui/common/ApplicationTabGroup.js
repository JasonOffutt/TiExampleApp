var Window = require('ui/handheld/Window'),
	ApplicationTabGroup = function () {
		var tabGroup = Titanium.UI.createTabGroup(),
			fugitives = Titanium.UI.createTab({
				title: L('fugitives_tab_title'),
				window: new Window(true),
				icon: '/images/fugitives.png'
			}),
			captured = Titanium.UI.createTab({
				title: L('captured_tab_title'),
				window: new Window(false),
				icon: '/images/captured.png'
			});
			
		tabGroup.addTab(fugitives);
		tabGroup.addTab(captured);
		return tabGroup;
	};

module.exports = ApplicationTabGroup;
