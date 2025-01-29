const http = require('http');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const server =http.createServer((req,res)=>{
    const { pathname } = parse(req.url);
    res.statusCode=200;
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    
        <form action="/submit" action="POST" enctype="multipart/form-data">
            <input type="file" name=img>
            <input type="submit">
        </form>
        
    </body>
    </html>`)
    
})


const storage = multer.diskStorage({
    destination: './Upload',
    filename: (req, file, cb) => {
        cb(null, `IMAGE__${Date.now()}${path.extname(file.originalname)}`);
    }
});
const Upload = multer({ storage: storage });
app.use('/Upload', express.static('Upload'));
app.post('/Upload', Upload.fields([
    { name: 'image_add', maxCount: 1 }
]), (req, res) => {
    let responseHtml = '';

    if (req.files['image_add']) {
        responseHtml += `<img src="http://localhost:${PORTNO}/Upload/${req.files['image_add'][0].filename}" alt="" width="200" height="200">`;
    }

    res.send(responseHtml || 'No files uploaded.');
});


server.listen(3000)