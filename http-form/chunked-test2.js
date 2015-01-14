require('http').createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/png'});
    // 管道风  对接流
    require('fs').createReadStream('image.png').pipe(res);
}).listen(3000);