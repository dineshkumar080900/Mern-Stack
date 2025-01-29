const express = require('express');
const path = require('path');
const app = express();
const body = require('body-parser');
app.use(body.json());

app.use(body.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'htmlFiles', 'index.html'));
});


app.post('/submit', (req, res) => {
    res.send(req.body);
});





app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
