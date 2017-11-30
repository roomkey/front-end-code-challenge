This data folder represents an older, express server implementation to provide
JSON data that gets massaged a bit in order to provide the illusion of dynamic
data. It seems unnecessary to have this kind of 1st party code complexity in a
front-end code challenge that could be done just with simpler, truly static data.

We're thinking about gutting this in favor of implementing local JSON data using
the [json-server](https://www.npmjs.com/package/json-server) package, which would
allow us to nuke a bunch of development dependencies like express, etc. Let us
know if you have any thoughts/opinions on the matter.
