var express     = require('express');
var path        = require('path');
var bodyParser  = require('body-parser');
var locations   = require('./routes/locations');

var app = express();
var publicPathName = 'public';
var publicPath = path.join(__dirname, publicPathName);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(publicPath));

app.use('/api/locations', locations);

var server = app.listen(3001);
