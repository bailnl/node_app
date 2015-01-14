var fs = require('fs');
// 获取工作目录下所有的文件
var files = fs.readdirSync(process.cwd());
files.forEach(function (file) {
    if (/\.js/.test(file)) {
        fs.watchFile(process.cwd() + '/' + file, function () {
            console.log(' - ' + file + ' changed');
        });
    }
});
// 真的可以吗