var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handle = {};   //包含处理函数,此处不能声明为 var handle = []；原因：[]的index只接受数字。{}的index才支持任意可hash的类型。
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;
server.start(router.route,handle);