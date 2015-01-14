var http = require("http");
var url = require("url");
var formidable = require("formidable");  //必须要下在formidable模块，可以使用npm下载

function start(route,handle){
	function onRequest(req,res){
		pathname = url.parse(req.url).pathname;   //得到路径
		var postData = "";
		console.log("Pathname--------------:" +  pathname + " is coming");
		route(handle,req,res,pathname);   //调用路由函数
	}
	http.createServer(onRequest).listen(8080);
	console.log("server is starting");

};

exports.start = start;  //暴露start函数
	