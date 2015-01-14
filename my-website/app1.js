var connect = require('connect'),
    http = require('http'),
    serveStatic = require('serve-static'),
    morgan = require('morgan');

var app = connect();
app.use(function (req, res, next) {
    console.log(' %s %s ', req.method, req.url);
    // 交给其他中间件去处理
    next();
});

app.use(function (req, res, next) {
    if ('GET' == req.method && '/images' == req.url.substr(0, 7)) {
        // 托管图片
    }
    else {
        // 交给其他中间件去处理
        next();
    }
});
app.use(function (req, res, next) {
    if ('GET' == req.method && '/' == req.url) {
        // 响应 index.html 文件
    }
    else {
        // 交给其他中间件去处理
        next();
    }
});
app.use(function (req, res, next) {
    res.writeHead(404);
    res.end('Not found');
});
app.use(morgan('combined'));

http.createServer(app).listen(3000);




