function route(handle,pathname){
    console.log('a route to:'+pathname);
    if(typeof handle[pathname]=='function'){
        return handle[pathname]();
    }else{
        console.log("No request handler found for "+pathname);
        return "404 Not Found";
    }
}
exports.route=route;