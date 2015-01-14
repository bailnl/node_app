process.on('SIGKILL',function () {
    // 信号已收到
    console.log('end！');
});

console.error('An error occurred');
process.exit(1);

// 在测试 watch.js 文件