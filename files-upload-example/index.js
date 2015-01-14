var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handle = {};   //����������,�˴���������Ϊ var handle = []��ԭ��[]��indexֻ�������֡�{}��index��֧�������hash�����͡�
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;
server.start(router.route,handle);