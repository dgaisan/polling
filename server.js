var express = require('express');

var app = express();

// serving static files
app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

// starting up the server
app.listen(3000);
console.log('Static server is running')