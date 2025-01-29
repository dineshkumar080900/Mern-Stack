const debug = require('debug')('app');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  debug('Root endpoint accessed');
  res.send('Hello World!');
});

app.listen(3000, () => debug('Server running on port 3000'));