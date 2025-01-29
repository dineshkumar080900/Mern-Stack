const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('View', './View');

app.get('/home', (req, res) => {
    res.render('index');
});

app.get('/home-text', (req, res) => {
    res.render('Home');
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
