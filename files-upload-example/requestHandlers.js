var querystring = require("querystring"),
	fs = require("fs"),
	exec = require("child_process").exec,
	formidable = require("formidable");
function start(req,res){
	console.log("Request handler 'start' was called.");
    
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
		'<input type="file" name="upload" multiple="multiple"/>'+
        '<input type="submit" value="UploadPic" />'+
        '</form>'+
        '</body>'+
        '</html>';
        
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.write(body);
    res.end();
}
function upload(req,res){
	console.log("Upload:" + req + "   ----  ===");
	var form = new formidable.IncomingForm();
	form.parse(req,function(error,fields,files){
		console.log("parsing is over");
		fs.renameSync(files.upload.path,"/tmp/test.png");
		res.writeHead(200,{"Content-Type":"text/html"});
		res.write("received image:<br/>");
		res.write("<img src='/show'/>");
		res.end();
	});;
}
function show(req,res){
	console.log("show");
	fs.readFile("/tmp/test.png","binary",function(error,file){
		if(error){
			res.writeHead(500,{"Content-Type":"text/plain"});
			res.write(error+"\n");
			res.end();
		}else{
			 res.writeHead(200,{"Content-Type":"image/jpg"});
			 res.write(file,"binary");
			 res.end();
		}
	});
}

exports.start = start;
exports.upload = upload;
exports.show = show;
