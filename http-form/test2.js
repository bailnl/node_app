
// 写入 content-type : text/html
require('http').createServer(function (req,res) {
    res.writeHead(200, {'content-type': 'text/html'});
    res.end('hello <b>world!</b>');
}).listen(3000);
