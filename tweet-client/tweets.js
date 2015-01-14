// 我特么大陆用户 还特么 tweet 作死咩!
// 转成搜索音乐
// http://brisk.eu.org/api/song.php?name=老鼠爱大米
var http = require('http'),
    qs = require('querystring');
var search = process.argv.slice(2).join('');
if (!search) {
    return console.log('\n Usage: node tweets <search term> \n');
}
console.log('\n searching for \033[96m ' + search + ' \033[39m\n');
http.request({
    host: 'brisk.eu.org',
    path: '/api/song.php?' + qs.stringify({ name: search }),
    method: 'GET'
}, function (res) {
    res.setEncoding('utf8');
    var body = '';
    res.on('data', function (chunk) {
        body += chunk;
    });
    res.on('end', function () {
        var data = JSON.parse(body);
        data.forEach(function (item) {
            console.log('歌曲名:   \033[96m' + item.name + '\033[39m' + '      歌手:   \033[92m' + item.author + '\033[39m');
            console.log('下载地址:   \033[91m' + item.url + '\033[39m');
            console.log('--------------------------------------');
        });
    });
}).end();
