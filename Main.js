const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
var morgan = require('morgan')
const app = express();

app.use(morgan('combined'))
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

app.server = http.createServer(app);
const api = require(__dirname + '/api/ApiMain.js')(app);
console.log("Server listening at port 5000")
app.server.listen(5000);
