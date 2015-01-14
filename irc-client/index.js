var net = require('net');
var client = net.connect(6667, 'irc.freenode.net');
client.setEncoding('utf8');
client.on('connect', function () {
    client.write('NICK cccc\r\n');
    client.write('USER cccc 0 * :realname\r\n');
    client.write('JOIN #node.js\r\n');
});
client.on('data', function (data) {
    console.log(data);
});
