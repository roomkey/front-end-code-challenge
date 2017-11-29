const express = require('express'),
      bodyParser = require('body-parser'),
      locations = require('./routes/locations')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api/locations', locations)
app.listen(3001)
