var exec=require("child_process").exec;
function start(response){
    console.log('start is called');
    var content="empty";
    exec("find /",{timeout:10000,maxBuffer:20000*1024},function(error,stdout,stderr){
        //console.log(stdout);
        response.writeHead(200,{"Content-type":"text/plian"});
		response.write(stdout);
		response.end();
    }); 
}
function upload(response){
    console.log('upload is called');
    response.writeHead(200,{"Content-type":"text/plian"});
	response.write("Hello Upload");
	response.end();
}
exports.start=start;
exports.upload=upload;
