var http = require('http');//引入一个http
var url = require('url');//引入一个url
var path = require('path')//引入路径
var fs = require('fs');//引入fs
var server = http.createServer(function (request, response) {

    var urlObj = url.parse(request.url);//生成一个url对象
    console.log(urlObj);
    var pathname = urlObj.pathname;
    if (pathname === '/img.jpg') {
        var finalPath = path.join(__dirname, pathname);
        fs.readFile(finalPath, 'binary', function (err, data) {
            if (err) {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(err);
                response.end("错误");
            } else {
                response.writeHead(200, {'Content-Type': 'image/png'});
                response.write(data, 'binary');
                response.end("成功");
            }
            // if (err)return;
            // console.log(data);
            // response.end(data);
        });

    } else {
        response.statusCode = 404;
        response.end('文件未找到');
    }

});

server.listen(3000, function () {
    //监听完毕时,会去执行的函数
    console.log("服务运行在http://localhost:3000")
});




















