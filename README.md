Room Key Front End Development Challenge
========================================

Greetings and salutations!

Thanks for your interest in joining the team here at Room Key. Part of our
evaluation process for potential team members is to set an open-ended code
challenge which will allow you to flex your creative muscles and give you an
opportunity to demonstrate your coding skills.

We think (and hope you agree) that this is better than asking you to scribble an
impromptu algorithm onto a whiteboard in an interview setting. Instead, this
challenge gives you space and time to come up with your best work in a way that
better reflects how software is really produced.

We realize that this represents a significant investment of effort, but one we
hope will be worthwhile for both you and us. Even if your application to Room
Key is ultimately unsuccessful, you are more than welcome to use what you
produce for this challenge in your personal portfolio.

If you are successful then we'll invite you to our offices for a face-to-face
interview and we will use what you produce for this challenge as a starting
point for our chat.

We are always very interested to see how applicants respond to our code
challenges and what they end up producing. We hope you find this a stimulating
exercise and wish you the very best of luck.

Cheers!  
The Room Key Team

## Overview

We have created a simple [NodeJS](https://nodejs.org) application which does two
things:

1. Serves static content from a 'public' directory
1. Provides a simple JSON API allowing you to perform simulated hotel searches.

Your challenge is to build an application that makes use of
the data served by this API in a way you find interesting.

You can choose whichever front-end technologies you like to create this
application. Room Key's front-end is a
[BackboneJS](http://backbonejs.org/) application but there is no obligation
to choose Backbone. If you prefer a functional-reactive approach using [ReactJS](http://facebook.github.io/react/) or a more fully-featured framework such as [AngularJS](https://angularjs.org/), then go for it!

Additionally, if you wish to enhance the NodeJS application, please feel free to do so in any way you wish. For example you may wish to introduce server-side sorting or pagination.

In terms of styling and layout, again please choose whatever you prefer.
Feel free to use a CSS framework or pre-processor. Whatever you are most comfortable with.

## Setting Up

This application requires [NodeJS](http://nodejs.org/download/) which you
will need to install if you have not already done so.

Once you have NodeJS installed, please fork this Github repository. You
will need to create a GitHub account if you do not already have one for
personal projects.

Next `git clone` your fork.

Then install the package dependencies by running:

```
npm install
```

Once the dependencies are installed, start the application server:

```
npm start
```

Once the server is running, you can access the start page (public/index.html) at [http://localhost:9696](http://localhost:9696).

## API

The application provides a number of API endpoints which are a simplified form of the actual API used by the various Room Key applications:

### API Endpoints

#### /api/locations  
HTTP GET: returns an array of all available locations that can be searched
for hotels.

Note that for the purposes of this challenge this is a very limited set of data. and so there are aonly 3 locations available.

#### /api/locations /:id
HTTP GET: returns an object representing the location with the given `:id`.

Example:
```
http://localhost:9696/api/locations/charlottesville/
```

#### /api/locations/:id/hotels
HTTP GET: returns an array of hotels contained within the location. Two querystring parameters are required: `checkin` and `checkout` both of
which should be provided in `yyyy-mm-dd` format.

Example:
```
http://localhost:9696/api/locations/charlottesville/hotels?checkin=2016-05-02&checkout=2016-05-04
```

These date parameters determine the hotel's rate and availability (see the `nightly_rate` and `available` values). If they change, then the rates and availability will change too, again to simulate the dynamic nature of hotel pricing and availability in a real-world application.

A hotel object will look something like the following. All fields are named in such a way that it should be easy to figure everything out, but if you're not sure of anything, then please reach out and ask:

```json
{
  "description": "The Residence Inn Charlottesville, VA hotel is conveniently located just minutes from downtown, where you will find the Downtown Mall, Virginia Discovery Museum, Paramount Theatre, Charlottesville Pavilion and many shopping and dining options.",
  "address": {
    "postal_code": "22903",
    "country_code": "US",
    "country_name": "United States",
    "region_code": "VA",
    "region_name": "Virginia",
    "city": "Charlottesville",
    "line2": null,
    "line1": "1111 Millmont Street"
  },
  "name": "Residence Inn Charlottesville",
  "short_description": "The Residence Inn Charlottesville, VA hotel is conveniently located just minutes from downtown...",
  "brand": "Residence Inn",
  "photos": [
    {
      "caption": "Exterior",
      "dimensions": [
        689,
        477
      ],
      "url": "//d29u3c1wxehloe.cloudfront.net/vfml/1073/452/29909045/big.jpg",
      "thumbnail": "//d29u3c1wxehloe.cloudfront.net/vfml/1073/452/29909045/200x150.jpg"
    },
    {
      "caption": "Front Desk",
      "dimensions": [
        689,
        477
      ],
      "url": "//d29u3c1wxehloe.cloudfront.net/vfml/1073/452/36517841/big.jpg",
      "thumbnail": "//d29u3c1wxehloe.cloudfront.net/vfml/1073/452/36517841/200x150.jpg"
    },
    {
      "caption": "Outdoor Patio",
      "dimensions": [
        689,
        477
      ],
      "url": "//d29u3c1wxehloe.cloudfront.net/vfml/1073/452/48799481/big.jpg",
      "thumbnail": "//d29u3c1wxehloe.cloudfront.net/vfml/1073/452/48799481/200x150.jpg"
    }
  ],
  "stars": 3,
  "lat": 38.052145,
  "amenities": [
    {
      "code": "PKG",
      "name": "Parking"
    },
    {
      "code": "FBKFST",
      "name": "FREE Breakfast"
    },
    {
      "code": "PETS",
      "name": "Pet Friendly"
    },
    {
      "code": "INT",
      "name": "Internet"
    },
    {
      "code": "POOL",
      "name": "Pool"
    }
  ],
  "distance": 1.553474382763473,
  "lng": -78.503046,
  "best_rate_guarantee": {
    "description": "Find a lower hotel rate and we'll match it + give you an extra 25% discount.",
    "heading": "Look No Further® Best Rate Guarantee",
    "url": "http://www.marriott.com/hotel-prices/travel.mi",
    "label": "Residence Inn's Best Rate Guarantee"
  },
  "id": "0ZEzgGG4W04s8EP05g9krVMw",
  "guest_rating": 4,
  "guest_reviews": [
    {
      "title": "Really Awesome Staff",
      "summary": "I stayed at this facility for seven weeks while attending school.  Every morning I would go to eat breakfast and would be greeted by a WONDERFUL lady named Susan.  She made my day every morning with...",
      "rating": 5
    },
    {
      "title": "Hotel staff was excellent",
      "summary": "The woman Maria ad Benny in the dining area were amazing!!  They were so pleasant, helpful and made sure you were well taken care of.!  The breakfast was always fresh and the eating area was...",
      "rating": 4
    }
  ],
  "chain": "Marriott",
  "logo": "//d1zikkhuo9bi6f.cloudfront.net/v31.6/roomkey/images/_base/logos/brand/65x45/328.png",
  "nightly_rate": 247.7422095791274,
  "available": true
}
```

#### /api/locations/:id/hotels/:hotelid

Similar to `/api/locations/:id/hotels`, but returns only a single hotel object for the `:hotelid` given.

Example:
```
http://localhost:9696/api/locations/charlottesville/hotels/0ZEzgGG4W04s8EP05g9krVMw?checkin=2015-05-02&checkout=2015-05-04
```

## Requirements and Expectations

**We expect this challenge to involve 8 hours of work or thereabouts.**

We realize that there is no way to complete a fully polished
application in this time. This is intentional. Please treat this exercise in the same way you'd treat a hackathon, and get as far as
you can in the time given, ensuring that you focus your efforts on the
things that will get you furthest, quickest.

These should be the things that best demonstrate your skills. If you are more UI-inclinated and comfortable in the view layer, then concentrate there. If you like coming up with funky algorithms then concentrate there and don't worry so much about a pretty UI.

###What are we looking for?

#### Your Application

- Creativity and originality
- A good user experience

#### Your Code

- Readability
- Good architectural decisions
- Modularity

## A Little Inspiration

If you are scratching your head for ideas, feel free to use one of the following for inspiration. But don't feel obligated to do so.

- Do some research into other hotel search engines and online travel in general and improve upon an existing idea
- A hotel shortlist
- An innovative way to filter or sort hotels
- A [PhoneGap](http://phonegap.com/) application
- A map-based application
- A hotel recommendation tool
- Semantic search e.g. "Hotels with a pool in Charlottesville"
- A mashup with another API or service

## Submission

Email us once you have finished and send us the URL to your fork of this repository (please make sure your repo is publically available).

## Found a Bug?

Congratulations. You get bonus points! Email us or submit a GitHub issue (or even better, a pull request) and we'll get it fixed.

## License

This project is MIT licensed. This means that you are allowed to freely use this for your personal portfolio.
