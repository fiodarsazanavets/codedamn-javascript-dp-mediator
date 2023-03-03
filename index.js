const NetworkMediator = require('./networkMediator.js');
const DesktopComputer = require('./desktopComputer.js');
const Server = require('./server.js');

var networkMediator = new NetworkMediator();
var desktopComputer = new DesktopComputer('computer-1', networkMediator);
var server = new Server('server-1', networkMediator);

desktopComputer.sendCommand('server-1', 'reboot');
server.sendCommand('computer-1', 'trigger-updates');