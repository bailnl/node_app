require('http').createServer(function (req, res) {
    res.writeHead(200);
    res.write('Hello');

    // transfer-encoding 默认为 chunked(逐步产生)
    // connection 默认为 keep-alive(始终保持连接)
    setTimeout(function () {
        // end 会Node结束响应
        res.end(' World!');
    },1000);
}).listen(3000);