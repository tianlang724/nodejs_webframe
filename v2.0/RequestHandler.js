var querystring=require("querystring");
var fs=require("fs");
function start(response){
    console.log('start is called');
    var body='<html>'+
    '<head>'+
    '<meta http-equiv="Context-Type" content="text/html>'+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(body);
    response.end();
}
function upload(response,posData){
    console.log('upload is called');
    response.writeHead(200,{"Content-type":"text/plian"});
    //response.write("You upload "+posData);
	response.write("You upload "+querystring.parse(posData).text);
	response.end();
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
