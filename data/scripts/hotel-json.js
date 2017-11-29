var fs    = require('fs');
var _     = require('lodash');
var path  = require('path');

var src = '../raw/';
var dest = path.join(__dirname, '../hotels/');
var locations = [
  'charlottesville',
  'newyork',
  'chicago'
];

function getHotels(location) {
  hotels = require(path.join(src, location + '.json')).data;

  hotels = _.map(hotels, function(hotel) {
    var fieldsToRename = {
      'brg': 'best_rate_guarantee',
      'udicode': 'id',
      'user_rating': 'guest_rating'
    };

    var fieldsToDelete = [
      'booking_phone_number',
      'popularity',
      'fax',
      'primary_photo',
      'facebook',
      'telephone',
      'twitter',
      'location_id',
      'year_built',
      'reservation_telephone',
      'partners',
      'locations',
      'vfm_url',
      'is_white_label',
      'urgency_messages',
      'neighborhood',
      'year_renovated',
      'country_code'
    ];

    // Rename BRG
    _.each(fieldsToRename, function(renamed, orig) {
      hotel[renamed] = hotel[orig];
      delete hotel[orig];
    });

    // Remove unwanted fields
    _.each(fieldsToDelete, function(key) {
      delete hotel[key];
    });

    // Reviews
    if(hotel.tripadvisor) {
      hotel['guest_reviews'] = hotel.tripadvisor.reviews;
      delete hotel.tripadvisor;
      _.each(hotel['guest_reviews'], function(review, i){
        review.summary = review['content_summary'];
        delete review['content_summary'];
        review.rating = review['user_rating'];
        delete review['user_rating'];
        delete review.url;
        delete review['published_date'];
      });
    }

    // Chain
    if(hotel.group && hotel.group.name) hotel.chain = hotel.group.name;
    delete hotel.group;

    // Brand & Logo
    if(hotel.brand && hotel.brand.name) hotel.brand = hotel.brand.name;
    if(hotel['logo_id']) hotel.logo = '//d1zikkhuo9bi6f.cloudfront.net/v31.6/roomkey/images/_base/logos/brand/65x45/' + hotel['logo_id'] + '.png';
    delete hotel['logo_id'];

    // Photos
    _.each(hotel.photos, function(photo) {
      photo.dimensions = photo.big;
      delete photo.big;
      photo.url = '//d29u3c1wxehloe.cloudfront.net' + photo.id + 'big.jpg';
      delete photo.sequence;
      photo.thumbnail = '//d29u3c1wxehloe.cloudfront.net' + photo.id + '200x150.jpg';
      delete photo.id;
    });

    return hotel;
  });

  return hotels;
}

_.each(locations, function(location) {
  var hotels = getHotels(location);
  fs.writeFile(path.join(dest, location + '.json'), JSON.stringify(hotels));
});
