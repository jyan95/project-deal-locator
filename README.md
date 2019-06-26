# dealpal
A mobile optimized app designed to locate and track nearby deals.

![Screenshot](https://i.imgur.com/NXjFuUZ.png)

https://dealpal.herokuapp.com/

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Motivation
I wanted to create a simple app that would locate deals in a user's vicinity in case they had time to spare, but didn't want to go too far out of their way. I also wanted to familiarize myself with mobile first design, as well as implementation of an interactive map. 

## Tech stack

<b>Built with</b>
- [React.js](https://reactjs.org/) Frontend
- [Ruby on Rails](https://rubyonrails.org/) Backend 
- [Leaflet](https://leafletjs.com/) Map 
- [React-Leaflet](https://react-leaflet.js.org/) Map
- [Material UI](https://material-ui.com/)

## Features
- live deals fetched based on user location
- sends deal addresses to geocoding API to plot deal markers on interactive map
- Material UI for mobile optimization and intuitive use
  
## Installation

1. Clone this repository and navigate to /backend, and run gem install bundler, then bundle
2. run `rails db:migrate` and `rails db:seed`, then run `rails s` (it will default to localhost:3000
3. navigate to `/frontend` and run `npm install`, then `npm start` - it will prompt you to run on another port, hit `y`
4. if it does not automatically open in your browser, navigate to http://localhost:3001

## API Reference

- [Discount API](https://discountapi.com/docs)
- [Mapquest Geocoding API](https://developer.mapquest.com/documentation/geocoding-api/)


## License
This code is free to use under the terms of the MIT license.
