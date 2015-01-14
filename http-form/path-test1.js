var parseUrl = require('url').parse,
    http = require('http');
http.createServer(function (req, res) {
    console.log(parseUrl(req.url));
    res.end(JSON.stringify(parseUrl(req.url)));
}).listen(3000);


