var http = require("http");
var url = require("url");
var formidable = require("formidable");  //����Ҫ����formidableģ�飬����ʹ��npm����

function start(route,handle){
	function onRequest(req,res){
		pathname = url.parse(req.url).pathname;   //�õ�·��
		var postData = "";
		console.log("Pathname--------------:" +  pathname + " is coming");
		route(handle,req,res,pathname);   //����·�ɺ���
	}
	http.createServer(onRequest).listen(8080);
	console.log("server is starting");

};

exports.start = start;  //��¶start����
	