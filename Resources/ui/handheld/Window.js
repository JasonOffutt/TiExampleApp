var Window = function (showFugitives) {
	return Titanium.UI.createWindow({
		title: showFugitives ? L('fugitives_tab_title') : L('captured_tab_title'),
		backgroundImage: '/images/grain.png',
		barColor: '#6d0a0c'
	});
};

module.exports = Window;
