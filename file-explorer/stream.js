var fs = require('fs');
// 回调函数必须要等到整个文件读取完毕、输入到RAM、可用的情况下才被触发
fs.readFile('index.js', function (err, content) {
    // 对文件处理
});

// 每次会读取可变大小的内容块，并且每次读取后触发回调函数
var stream = fs.createReadStream('index.js');
stream.on('data', function (chunk) {
    // 处理文件部分内容
});
stream.on('end', function (chunk) {
    // 读取文件完毕
});
