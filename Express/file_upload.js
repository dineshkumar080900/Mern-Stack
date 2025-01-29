const express = require('express');
const app = express();
const PORTNO = 8080;
const multer = require('multer');
const path = require('path');

app.get('/', (req, res) => {
    res.send(`<form action="/Upload" method="POST" enctype="multipart/form-data">
    <input type="file" name="image_add" >
    <input type="file" name="image_add1" >
    <input type="submit">
</form>`);
});

const storage = multer.diskStorage({
    destination: './Upload',
    filename: (req, file, cb) => {
        return cb(null, `IMAGE__${Date.now()}${path.extname(file.originalname)}`);
    }
});

const Upload = multer({ storage: storage });

app.use('/Upload', express.static('Upload'));

app.post('/Upload', Upload.single('image_add'), (req, res) => {
    res.send(`
    <img src="http://localhost:${PORTNO}/Upload/${req.file.filename}" alt="" width="200" height="200">`);
});


app.listen(PORTNO, () => {
    console.log(`Server is running on port ${PORTNO}`);
});
