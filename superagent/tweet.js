var request = require('superagent');
var search = process.argv.slice(2).join('');
request.get('http://brisk.eu.org/api/song.php')
    .send({name: search})
    .set('data',new Date)
    .end(function (res) {
        // res.setEncoding("utf8");
        var data = JSON.parse(res.text);
        data.forEach(function (item) {
            console.log('歌曲名:   \033[96m' + item.name + '\033[39m' + '      歌手:   \033[92m' + item.author + '\033[39m');
            console.log('下载地址:   \033[91m' + item.url + '\033[39m');
            console.log('--------------------------------------');
        });
    });