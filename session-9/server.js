var http=require("http");

var server=http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write("<h1>Welcome to Node Js</h1>");
    res.end();
})

server.listen(4080,()=>{console.log("Server Started")});