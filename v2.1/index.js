var server=require('./server');
var router=require('./route');
var requestHandler=require('./RequestHandler');

var handle={};
handle['/']=requestHandler.start;
handle['/start']=requestHandler.start;
handle['/upload']=requestHandler.upload;
handle['/show']=requestHandler.show;
server.start(router.route,handle);