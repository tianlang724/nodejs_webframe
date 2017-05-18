var exec=require("child_process").exec;
function start(){
    console.log('start is called');

    /*******test 1 测试阻塞之后的表现*******/
    // function sleep(ms){
    //     var startTime=new Date().getTime();
    //     while(new Date().getTime()<startTime+ms);
    // }
    // sleep(10000);
    //return "[start] hello!"

    /*********test 2 错误的非阻塞***********/
    var content="empty";
    exec("ls -lah",function(error,stdout,stderr){
        content=stdout;
        //return content;  不能再该位置返回值。否则会有错误TypeError
    });
    return content;
    
}
function upload(){
    console.log('upload is called');
    return "[upload] hello!"
}
exports.start=start;
exports.upload=upload;