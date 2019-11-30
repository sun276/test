//2.准备一些变量
//3.通过http 模块，制造一个server对象
var http = require('http');
var part='8088';
var i=0;//计数器
var hostname='127.0.0.1';
var server=http.createServer(function (req,res) {
 i++;//计数第几次访问
 res.statusCode=200;
 // res.writeHead(200, {'Content-Type': 'text/plain'});
 res.setHeader('content-Type','text/html');
 res.write('<head><meta charset="UTF-8"></head>\n');
 var httpDiv='<div style="color: red">div</div>\n';
 res.write('<b>13234</b>\n');
 res.write(httpDiv);
 res.write('<h1>hhhhhhhh</h1>\n');
 res.end('访问次数为：'+`${i}`);
});
server.listen(part,hostname,function () {
    console.log('Server running at http://%s:%s/',hostname,part);
    // console.log('Server running at http://127.0.0.1:8888/');
})
