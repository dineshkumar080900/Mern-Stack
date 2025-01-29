const http = require('http');
const server =http.createServer((res,req)=>{
    if(res.url=='/'){
        req.statusCode=200;
        req.end("<h1>hi</h1>");
    }
    else{
        req.statusCode=404;
        // res.writeHead(404, { 'Content-Type': 'text/html' });

        req.end('<img src="lovepik-404-page-error-png-image_400217866_wh1200.png" alt="">');
    }
})
server.listen(8080)





