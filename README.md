Room Key Front End Development Challenge
========================================

Greetings and salutations!

Thanks for your interest in joining the team here at Room Key. Part of our
evaluation process is to set an open-ended challenge which will allow you to
flex your creative muscles and give you an opportunity to demonstrate your
coding skills. We think (and hope you agree) that this is better than asking
you to scribble algorithms on a whiteboard in an interview setting.

We realize that this represents a significant investment of effort, but one we
hope will be worthwhile for both you and us. Even if your application to Room
Key is ultimately unsuccessful, you are more than welcome to use what you
produce for this challenge in your personal portfolio.

If you are successful then we'll invite you to our offices for a face-to-face
interview and will use what you produce for this challenge as a starting
point for our chat.

Cheers!  
The Room Key Team

## Overview

We have created a simple [NodeJS](https://nodejs.org) application which:

1. Bundles your source code and serves it through http://localhost:3000/
2. Provides **mock** data through http://localhost:3000/api/
3. Provides **live** data through http://localhost:3000/ by proxying JSON requests
   to our live servers

Your challenge is to build something interesting that makes use of either the mock
or live data provided. If you're more interested in UI/UX development, you might
want to use the mock data. It will get you up and running faster. If
reverse-engineering and data manipulation is more your thing, consider taking a
stab at using our live data. See the [API](#api) section below for more details.

You can choose whichever technologies you like to create this application. Feel
free to make changes to _any_ of the files in this repository, or to swap out
any of the technologies we've provided. It's your party. 😎

## Prerequisites

1. You will need a basic understanding of [Git](https://git-scm.com/) source
   control management
2. You will need a [GitHub](https://github.com/) account
3. [NodeJS](http://nodejs.org/download/) should be installed on your machine
4. You will need to be familiar with making data requests in web applications

## Getting Started

1. Fork [this repository](https://github.com/roomkey/front-end-code-challenge)
   to your GitHub account
2. Clone *your* fork to your development machine
2. Install the package dependencies by running `npm install` (or `yarn` if you prefer)
3. Start the application server by running `npm start`
4. Open your browser to http://localhost:3000

## Submission

Email us once you have finished and send us the URL to your fork of this repository.
If you are not already in contact with one of us, you can send your email to
[jobs@roomkey.com](mailto:jobs@roomkey.com).

If your fork is not publicly available, just let us know and we will send you the
GitHub users you can give direct access. Feel free to create a throwaway GitHub
account if you are worried about others seeing that you are working on your Room
Key project.

## Expectations

We realize that there is no way to complete a fully polished application for the
purposes of a code challenge. You have other stuff going on in your life, so focus
on the things that best demonstrate your skill and passion. If you are more
comfortable in the user interface, then concentrate there. If you like working
deeper in the code, then concentrate there and don't worry so much about making
a pretty UI.

You are encouraged to include some notes about the aspects you didn't get time
to complete and how you would plan to further develop/improve the application
given more time. Please include them in this readme rather than in an email so
that others can see them when we share your work internally.

We are looking for creativity, originality, and a good user experience in your
**application** if that's an area you focused on.

We are looking for readability, good architectural decisions, modularity, and a
solid approach to testing in your **code**.

## Found a Bug?

Congratulations! You get bonus points! Email us or submit a GitHub issue
(or even better, a pull request) and we'll get it fixed. Suggestions to improve
this code challenge are also very welcome.

## API

This NodeJS application provides two ways of requesting data, and you can choose
whichever works best for you. It all depends on where you get your kicks.

The **[Mock API](#mock-api)** is served through http://localhost:3000/api/.
You might want to use this if you're interested in UI/UX development. It's the
fastest way to get usable data on the screen, and does not require an internet
connection. The available endpoints are [documented below](#mock-api).

The **[Live API](#live-api)** is served through http://localhost:3000/
when explicitly requesting JSON data. These requests are proxied to https://www.roomkey.com.
There is intentionally very little documentation provided for this method as
figuring it out is part of the fun. If this sound horrible, _don't worry_. It's
provided for those enjoy a particular brand of pain. More details and an example
are [provided below](#live-api).

### Mock API

The mock data API is available through http://localhost:3000/api/, which is
proxied to an express server running on port 3001 that serves the contents of
the `data/` folder. You can make HTTP `GET` requests against the following endpoints:

#### GET /api/locations
Returns an array of locations that can be searched for hotels. For the purposes
of this challenge there are only 3 locations available.

#### GET /api/locations/:locationId
Returns an object representing the location with the given `:locationId`.

For example:
```
http://localhost:3000/api/locations/charlottesville/
```

#### GET /api/locations/:locationId/hotels
Returns an array of hotels contained within the location. Two querystring
parameters are required: `checkin` and `checkout` both of which should be
provided in `yyyy-mm-dd` format.

For example:
```
http://localhost:3000/api/locations/charlottesville/hotels?checkin=2016-05-02&checkout=2016-05-04
```

These date parameters determine the hotel's rate and availability (see the
`nightly_rate` and `available` values). If they change, then the rates and
availability will change too, again to simulate the dynamic nature of hotel
pricing and availability in a real-world application.

#### GET /api/locations/:locationId/hotels/:hotelId

Similar to `/api/locations/:locationId/hotels`, but returns only a single hotel
object for the `:hotelId` given.

For Example:
```
http://localhost:3000/api/locations/charlottesville/hotels/0ZEzgGG4W04s8EP05g9krVMw?checkin=2015-05-02&checkout=2015-05-04
```

### Live API

The live data API gives you richer, live data coming directly from our
production website. It works by proxying all JSON requests to https://www.roomkey.com.

For example:

```
fetch('/locations/0nN94iG4S04s5cO05g9krVMw/hotels', {headers: {Accept: 'application/json'}})
  .then(function(res) { return res.json() })
  .then(console.log)
```

This creates a `GET` request of type `application/json` against
http://localhost:3000/locations/0nN94iG4S04s5cO05g9krVMw/hotels which is in turn
proxied to https://www.roomkey.com/locations/0nN94iG4S04s5cO05g9krVMw/hotels.
Note how visiting the second of those URLs in the browser returns the actual HTML
for a search page results instead of the desired JSON data. This is because you
have to explicitly ask for JSON with the `Accept:application/json` request header.
Check out the `webpack.config.js` file and you'll see the proxy rules.

We're intentionally leaving the actual endpoints for live data undocumented for
this code challenge. Don't worry if this doesn't sound like fun or just isn't
your thing. Otherwise, head to https://www.roomkey.com and poke around under
the covers.

Happy hunting.

#### Image Paths with Live API

Building image paths for the live api can use the following pattern:

```
const imageUrl = `https://d29u3c1wxehloe.cloudfront.net${photo.id}/[200x150|500x375|big].jpg```
```

## License

This project is MIT licensed. This means that you are allowed to freely use this for your personal portfolio.
