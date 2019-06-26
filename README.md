# dealpal
A mobile optimized app designed to locate and track nearby deals.
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

## Code Example

  getDeals = (position) => {
    let queryPage = 1;
    let { latitude, longitude } = position.coords;
    while(queryPage < 20){
      queryPage++;
      API.getDeals(latitude,longitude,queryPage)
      .then(data => this.setState({APIdeals: this.state.APIdeals.concat(data.deals.filter(d => !!d.deal.merchant.address))}))
    };
  }
  
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.getDeals(position);
    });
  } else {
    console.log('geolocation is not available');
  }
  
## Installation
Provide step by step series of examples and explanations about how to get a development env running.

## API Reference

- [Discount API](https://discountapi.com/docs)
- [Mapquest Geocoding API](https://developer.mapquest.com/documentation/geocoding-api/)

## How to use?
If people like your project they’ll want to learn how they can use it. To do so include step by step guide to use your project.

## Contribute

Let people know how they can contribute into your project. A [contributing guideline](https://github.com/zulip/zulip-electron/blob/master/CONTRIBUTING.md) will be a big plus.

## License
This code is free to use under the terms of the MIT license.
