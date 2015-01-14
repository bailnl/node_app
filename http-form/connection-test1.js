require('http').createServer(function (req, res) {
    console.log('--------------------------------------------------------');
    // 请求头信息

    // http服务器是更高层的api ，提供了控制和http协议的相关一些功能
    // 浏览在访问站点时不会就只用一个连接，很多主流的浏览器为了更快地加载网站内容，能向同一个主机打开八个不同的连接，并发送请求。
    // req.connection 获得tcp连接对象
    console.log(req.headers);
    console.log('--------------------------------------------------------');
    console.log(req.connection);

    res.writeHead(200, { 'content-type': 'text/html' });
    res.end('hello <b>World!</b>');
}).listen(3000);