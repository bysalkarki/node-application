'use strict';

const express = require('express');

// Constantsssss
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World babssfdaay');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
  console.log('This example is different!');
  console.log('The result is displayed in the Command Line Interface');
});
