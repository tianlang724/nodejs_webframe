var querystring=require("querystring");
var formidable=require("formidable");
var fs=require("fs");
var util=require("util");
function start(response){
    console.log('start is called');
    var body='<html>'+
    '<head>'+
    '<meta http-equiv="Context-Type" content="text/html>'+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="file" name="upload" multiple="multiple"/>'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(body);
    response.end();
}
function upload(response,request){
    console.log('upload is called');

    var form=new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(request,function(error,fields,files){
        console.log("parse done");
        //fs.renameSync(files.upload.path,"./tmp/test.jpg");  //磁盘跨区问题
        var readStream=fs.createReadStream(files.upload.path);
        var writeStream=fs.createWriteStream("./tmp/test.jpg");
        // util.pump(readStream,writeStream,function(){
        //     fs.unlink(file.upload.path);
        // });
        readStream.pipe(writeStream);
        readStream.on("end",function(){
            fs.unlink(files.upload.path);
            response.writeHead(200,{"Content-type":"text/html"});
            response.write("You upload img <br/>");
            response.write("<img src='/show' />");
	        response.end();
        })

    });	
}
function show(response,posData){
    console.log("show is called");
    fs.readFile("./tmp/test.jpg","binary",function(error,file){
        if(error){
            response.writeHead(500,{"Content-Type":"text/plain"});
            response.write(error+'\n');
            response.end();
        }else{
            response.writeHead(200,{"Content-Type":"text/plain"});
            response.write(file,"binary");
            response.end();
        }
    })
}
exports.start=start;
exports.upload=upload;
exports.show=show;
