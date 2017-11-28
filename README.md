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

We have created a simple [NodeJS](https://nodejs.org) application which spins up
a [Webpack]() development server that:

1. Bundles your code in `src/` and serves it through http://localhost:3000
2. Serves local JSON data from `data.json` through http://localhost:3000/api/
3. Proxies `GET` requests with an `Accept:application/json` header to https://www.roomkey.com

Your challenge is to build a demo application that makes use of the data
provided. You can either use the locally provided JSON, or reverse engineer some
of our APIs on https://www.roomkey.com and use them the same way against http://localhost:3000.

You can choose whichever front-end technologies you like to create this
application. Feel free to make any changes to the configuration files in
this repository, or to swap any technologies.

## Getting Started

This application requires [NodeJS](http://nodejs.org/download/) which you
will need to install if you have not already done so.

Once you have NodeJS installed, please fork this Github repository. You
will need to create a GitHub account if you do not already have one for
personal projects. Finally:

1. `git clone` your fork
2. Install the package dependencies by running `npm install`
3. Start the application server by running `npm start`
4. Open your browser to http://localhost:3000
5. Modify the contents of the `src/` directory to create your application

## API

The application provides two ways of requesting data. The first is served from
`data.json` through http://localhost:3000/api/. This is the quickest way to get
started, and will not require an internet connection in order to run. The second
is available by reverse-engineering the API calls made on https://www.roomkey.com,
and making those same calls against http://localhost:3000, which will proxy them
back to our production site. This will allow you to work with richer, live data.

### Local API Endpoints

The local API is powered by the [json-server](https://www.npmjs.com/package/json-server)
package. You can make several HTTP `GET` requests against this server as follows:

#### /api/locations
Returns an array of locations that can be searched for hotels. For the purposes of this challenge this is a very limited set of data. and so there are only 3 locations available.

#### /api/locations/:locationId
Returns an object representing the location with the given `:locationId`.

For example:
```
http://localhost:3000/api/locations/charlottesville/
```

#### /api/locations/:locationId/hotels
HTTP GET: returns an array of hotels contained within the location. Two querystring parameters are required: `checkin` and `checkout` both of
which should be provided in `yyyy-mm-dd` format.

For example:
```
http://localhost:3000/api/locations/charlottesville/hotels?checkin=2016-05-02&checkout=2016-05-04
```

These date parameters determine the hotel's rate and availability (see the `nightly_rate` and `available` values). If they change, then the rates and availability will change too, again to simulate the dynamic nature of hotel pricing and availability in a real-world application.

#### /api/locations/:locationId/hotels/:hotelId

Similar to `/api/locations/:locationId/hotels`, but returns only a single hotel object for the `:hotelId` given.

Example:
```
http://localhost:3000/api/locations/charlottesville/hotels/0ZEzgGG4W04s8EP05g9krVMw?checkin=2015-05-02&checkout=2015-05-04
```

## Requirements and Expectations

**We expect this challenge to involve around 8 hours of work.**

We realize that there is no way to complete a fully polished
application in this time. This is intentional. Please treat this exercise in
the same way you'd treat a hackathon, and get as far as
you can in the time given, ensuring that you focus your efforts on the
things that will get you furthest, quickest.

These should be the things that best demonstrate your skills. If you are more
comfortable in the view layer, then concentrate there. If you
like coming up with funky algorithms then concentrate there and don't worry
so much about a pretty UI.

You are encouraged to include some notes about the aspects you didn't get time
to complete and how you'd plan to develop and improve the application further
given more time.

###What are we looking for?

#### Your Application

- Creativity and originality
- A good user experience

#### Your Code

- Readability
- Good architectural decisions
- Modularity
- A solid approach to testing

## Submission

Email us once you have finished and send us the URL to your fork of this repository. If your repo is not publicly available, let us know and we will provide you with the GitHub users who will require access. Feel free to create a throwaway GitHub account if you are worried about others seeing that you are working on your Room Key project.

## Found a Bug?

Congratulations. You get bonus points! Email us or submit a GitHub issue (or even better, a pull request) and we'll get it fixed.

## License

This project is MIT licensed. This means that you are allowed to freely use this for your personal portfolio.
