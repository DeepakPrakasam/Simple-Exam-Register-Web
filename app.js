var express = require('express');
var app = express();
var routing=require('./server.js');
app.use('/',routing);
const port = 8080;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});