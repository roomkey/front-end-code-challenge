var express     = require('express');
var path        = require('path');
var _           = require('lodash');
var ip          = require('ip');
var bodyParser  = require('body-parser');

var locations   = require('./routes/locations');

var app = express();
var publicPathName = 'public';
var publicPath = path.join(__dirname, publicPathName);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(publicPath));

app.use('/api/locations', locations);

var server = app.listen(9696, function () {

  var host = ip.address();
  var port = server.address().port;

  console.log('Server listening at http://localhost:%s and http://%s:%s', port, host, port);

});
