var connect = require('connect')
    , time = require('./request-time')
    , morgan = require('morgan');
var app = connect();
// 记录请求情况
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'));
// 实现时间中间件
app.use(time({time: 500}));
app.use(function (req, res, next) {
    // 快速响应
    if ('/a' == req.url) {
        res.writeHead(200);
        res.end('Fast!');
    }
    else {
        next();
    }
});
app.use(function (req, res, next) {
    // 延迟响应
    if ('/b' == req.url) {
        setTimeout(function () {
            res.writeHead(200);
            res.end('Slow!');
        }, 1000);
    }
    else {
        next();
    }
});
require('http').createServer(app).listen(3000);