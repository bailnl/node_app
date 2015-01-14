var net = require('net');
// 计数器
var count = 0
    , users = {}; // 用户
// 创建服务器
var server = net.createServer(function (conn) {

    // 设置编码
    conn.setEncoding('utf8');
    // 字符拼接
    var str = '';
    // 代表当前连接的昵称
    var nickname;
    // 写入初始化信息
    conn.write(
            '\r\n > wecome to \033[92m node-chat \033[39m!' +
            '\r\n > ' + count + ' other people are connected at this time.' +
            '\r\n > please write your name and press enter: '
    );
    // 连接数
    count++;
    // 发送信息
    function broadcast(msg, exceptMyself) {
        for (var i in users) {
            if (!exceptMyself || i != nickname) {
                users[i].write(msg);
            }
        }
    }

    // 接受数据
    conn.on('data', function (data) {


        // 由于win下 console.log() c 以及 conn.write() 会自动换行
        // 当 data 不是 enter 时，拼接字符串
        if (data != '\r\n') {
            str += data;
            return;
        }
        else {
            data = str;
            str = '';
        }
        // 接收到的第一份数据应当是用户输入的昵称
        if (!nickname) {
            // 昵称已存在
            if (users[data]) {
                conn.write('\n\r\033[93m> nickname already in use, try again:\033[39m');
                return;
            }
            else {
                nickname = data;
                users[nickname] = conn;
                // 给所有的客户发端加入房间的消息
                broadcast('\n\r\033[90m > [[' + nickname + ']] joined the room\033[39m\n\r');
                // 给服务端打印消息
                console.log('\n\r\033[90m > [[' + nickname + ']] joined the room\033[39m\n\r');
            }
        }
        else {
            // 否则视为聊天
            broadcast('\033[96m > [[' + nickname + ']]::\033[39m ' + data + '\n\r', true);
        }
        // 在cmd下 console.log() 会换行
        // process.stdout.write(data)
    });
    // 连接关闭
    conn.on('close', function () {
        count--;
        // 断开连接之后通知其他用户
        broadcast('\n\r\033[90m > [' + nickname + '] left the room\033[39m\n\r', true);
        // 断开连接之类 删除用户
        delete users[nickname];
    });
});
// 侦听
server.listen(3000, function () {
    console.log('\033[93m   server listening on *:3000\033[39m');
});

