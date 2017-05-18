var http=require('http');
var url=require('url');

function start(route,handle){
    function onRequest(request,response){
        var pathname=url.parse(request.url).pathname;
        console.log('Requets for'+pathname+'received');
        var ret=route(handle,pathname);
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write(ret);
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log('server started');
}
exports.start=start;