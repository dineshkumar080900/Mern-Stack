const express = require('express');
const app = express();
const PORTNO = 8060;
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure the Upload directory exists
if (!fs.existsSync('./Upload')) {
    fs.mkdirSync('./Upload');
}

app.get('/', (req, res) => {
    res.send(`
    <form action="/Upload" method="POST" enctype="multipart/form-data">
        <input type="file" name="image_add" >
        <input type="file" name="image_add1" >
        <input type="file" name="image_add2" >
        <input type="submit">
    </form>`);
});

const storage = multer.diskStorage({
    destination: './Upload',
    filename: (req, file, cb) => {
        cb(null, `IMAGE__${Date.now()}${path.extname(file.originalname)}`);
    }
});
const storage1 = multer.diskStorage({
    destination: './Upload1',
    filename: (req, file, cb) => {
        cb(null, `IMAGE__${Date.now()}${path.extname(file.originalname)}`);
    }
});
const storage2 = multer.diskStorage({
    destination: './Upload2',
    filename: (req, file, cb) => {
        cb(null, `IMAGE__${Date.now()}${path.extname(file.originalname)}`);
    }
});


const Upload = multer({ storage: storage });
const Upload1 = multer({ storage: storage1 });
const Upload2 = multer({ storage: storage2 });

app.use('/Upload', express.static('Upload'));
app.use('/Upload', express.static('Upload1'));
app.use('/Upload', express.static('Upload2'));

app.post('/Upload', Upload.fields([
    { name: 'image_add', maxCount: 1 },
    { name: 'image_add1', maxCount: 1 },
    { name: 'image_add2', maxCount: 1 }
]), (req, res) => {
    let responseHtml = '';

    if (req.files['image_add']) {
        responseHtml += `<img src="http://localhost:${PORTNO}/Upload/${req.files['image_add'][0].filename}" alt="" width="200" height="200">`;
    }

    if (req.files['image_add1']) {
        responseHtml += `<img src="http://localhost:${PORTNO}/Upload/${req.files['image_add1'][0].filename}" alt="" width="200" height="200">`;
    }
    if (req.files['image_add2']) {
        responseHtml += `<img src="http://localhost:${PORTNO}/Upload/${req.files['image_add1'][0].filename}" alt="" width="200" height="200">`;
    }

    res.send(responseHtml || 'No files uploaded.');
});

app.listen(PORTNO, () => {
    console.log(`Server is running on port ${PORTNO}`);
});
