var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('window-all-closed', function(){
	if(process.platform !== 'darwin') app.quit();
});

//var screen_width = window.screen.width;
//var scree_height = window.screen.height;

app.on('ready', function(){
	mainWindow = new BrowserWindow({
		width: 1367, 
		height: 1200,
		frame: false,
		transparent: 0});
	mainWindow.loadUrl('file://'+ __dirname + '/index.html');
	//mainWindow.openDevTools();
});
