var http = require('http'),
    fs = require('fs');
var server = http.createServer(function (req, res) {
    if ('GET' == req.method && '/images' == req.url.substr(0, 7) && '.jpg' == req.url.substr(-4)) {
        fs.stat(__dirname + req.url, function (err, stat) {
            if (err || !stat.isFile()) {
                res.writeHead(404);
                res.end('Not found');
            }
            // console.log(stat)
            serve(__dirname + req.url, 'image/jpeg');
        });
    }
    else if ('GET' == req.method && '/' == req.url) {
        serve(__dirname + '/index.html', 'text/html');
    }
    else {
        res.writeHead(404);
        res.end('Not found');
    }
    function serve(path, type) {
        res.writeHead(200, {'content-type': type});
        fs.createReadStream(path).pipe(res);
    }
});
server.listen(3000);