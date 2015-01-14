var connect = require('connect'),
    http = require('http'),
    // 静态文件服务
    serveStatic = require('serve-static'),
    // 日志记录
    morgan = require('morgan');
var app = connect();
// 使用use()方法来添加 morgan 中间件
app.use(morgan('combined'));
// 使用use()方法来添加 serveStatic 中间件
app.use(serveStatic(__dirname + '/website'));
http.createServer(app).listen(3000);