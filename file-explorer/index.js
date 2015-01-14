// 全局对象 Global Objects   http://nodejs.org/api/globals.html
// __dirname 获取当前执行js文件时的目录
// __filename 当前在执行的js文件路径
// global 对象
// console 控制台
// process 处理对象  继承自 EventEmitter
// process.cwd() 返回当前工作目录
// process.chdir() 更改工作目录
// process.env 返回环境变量

// fs.readdir() 异步的读取一个目录的内容
// fs.stat() 返回指定文件的无信息
// fs.readFile() 异步的读取一个文件


var fs = require('fs')
    , stdin = process.stdin
    , stdout = process.stdout;
fs.readdir(process.cwd(), function (err, files) {

    console.log('');
    if (!files.length) {
        return console.log('    \033[31m No files to show!\033[39m\n');
    }
    console.log('   Select which file or directory you want to see!\n');
    var stats = [];

    function file(i) {
        var filename = files[i];
        fs.stat(__dirname + '/' + filename, function (err, stat) {
            stats[i] = stat;
            if (stat.isDirectory()) {
                console.log('   ' + i + '   \033[36m' + filename + '/\033[39m');
            }
            else {
                console.log('   ' + i + '   \033[90m' + filename + '\033[39m');
            }
            if (++i == files.length) {
                read()
            }
            else {
                file(i);
            }
        });
    }

    function read() {
        console.log('');
        stdout.write('  \033[33mEnter your choice: \033[39m');
        stdin.resume();
        stdin.setEncoding('utf8');
        stdin.on('data', option);
    }

    function option(data) {
        var filename = files[Number(data)];
        if (!files[Number(data)]) {
            stdout.write('  \033[31mEnter your choice: \033[39m');
        }
        else if (stats[Number(data)].isDirectory()) {
            fs.readdir(__dirname + '/' + filename, function (err, files) {
                console.log('');
                console.log('   (' + files.length + ' files)');
                files.forEach(function (file) {
                    console.log('   -   ' + file);
                });
                console.log('');
            });
        }
        else {
            fs.readFile(__dirname + '/' + filename, 'utf8', function (err, data) {
                console.log('');
                console.log('033[90m' + data.replace(/(.*)/g, '    $1'));
                stdout.write('  \033[33mEnter your choice: \033[39m');
            });
        }
    }

    file(0);
});

