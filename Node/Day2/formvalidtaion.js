const http = require('http');
const server =http.createServer((res,req)=>{
    if(res.url=='/'){
        req.statusCode=200;
        req.end(`hi`);
    }
    else if(res.url=='/post' && url.module=='post'){
        req.statusCode=200;
        req.end("<h1>welcome</h1>");
    }
    else{
        req.statusCode=404;
        req.setHeader('Content-Type', 'text/html');
        req.end('<h1>Hello, World!</h1>');
    }
   
})
server.listen(8080)