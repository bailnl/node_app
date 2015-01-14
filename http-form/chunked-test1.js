require('http').createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'image/png'});

    // 创建一个 文件读取流
    var stream = require('fs').createReadStream('image.png');
    stream.on('data', function (data) {
        res.write(data);
    });
    stream.on('end', function () {
        res.end();
    });
}).listen(3000);