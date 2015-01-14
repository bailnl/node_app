function route(handle,req,res,pathname){
	console.log("route a request for: " + pathname)
	if(typeof handle[pathname] === 'function'){
		handle[pathname](req,res);
		return;
	}else{
		console.log("No Request Path----???????");
		res.writeHead(200,{"Content-Type":"text/html"});
		res.write("404 Not Found");
		res.end();
	}
}
exports.route = route;