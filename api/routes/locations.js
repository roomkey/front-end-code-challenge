var express = require('express'),
    router = express.Router(),
    _ = require('lodash'),
    url = require('url'),
    randomSeed = require('random-seed'),
    locations = require('../locations.json')

function cloneRequiredJson(obj) {
  return JSON.parse(JSON.stringify(obj))
}

function getHotels(location, req) {
  var querystring = url.parse(req.url, true).query
  var hotels = cloneRequiredJson(require('../hotels/' + location.id + '.json'))

  var checkin = Date.parse(querystring.checkin)
  var checkout = Date.parse(querystring.checkout)

  if (isNaN(checkin)) throw 'Invalid checkin'
  if (isNaN(checkout)) throw 'Invalid checkout'

  hotels = _.map(hotels, function(hotel) {
    var seed = hotel.id + querystring.checkin + querystring.checkout
    var rand = randomSeed.create(seed)
    var randomNumber = rand.random() // Between 0 and 1

    if(!!hotel['indicative_rate']){
      //TODO: Different function
      var baseRate = hotel['indicative_rate']
      var baseRateVariance = baseRate * 0.25
      var rate = rand.floatBetween(baseRate - baseRateVariance, baseRate + baseRateVariance)

      // Dynamic Rate
      hotel['nightly_rate'] = rate

      // Simulate Unavailability - 5% chance that the hotel will be unavailable
      hotel.available = (randomNumber > 0.05)
    }
    else {
      hotel.available = false
    }
    delete hotel['indicative_rate']

    return hotel
  })

  return hotels
}

// Get locations
router.get('/', function(req, res) {
  res.json(_.toArray(locations))
})

// Get a location by id
router.get('/:id', function(req, res, next) {
  var location = locations[req.params.id]
  if (!location) return next()
  res.json(location)
})

// Get a location's hotels
router.get('/:id/hotels', function(req, res, next) {
  var location = locations[req.params.id]
  var hotels
  if (!location) return next()
  res.json(getHotels(location, req))
})

// Get a specific hotel
router.get('/:id/hotels/:udicode', function(req, res, next) {
  var location = locations[req.params.id]
  var hotels
  if (!location) return next()
  hotels = getHotels(location, req)
  res.json(_.find(hotels, {id: req.params.udicode}))
})

module.exports = router
