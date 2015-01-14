var connect = require('connect'),
    http = require('http'),
    serveStatic = require('serve-static'),
    bodyParser = require('body-parser'),
    multipart = require('connect-multiparty'),
    morgan = require('morgan');
var app = connect();
//app.use(morgan('combined'));
app.use(serveStatic(__dirname + '/static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, uploadDir: __dirname + '/tmp'}));
app.use(multipart());
app.use(function (req, res, next) {
    if ('POST' == req.method && '/upload' == req.url) {
        res.end(req.body.files)
    }
    else {
        next();
    }
});

http.createServer(app).listen(3000);
