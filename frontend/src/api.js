const DEALS_KEY = process.env.REACT_APP_DEALS_API_KEY;
const MAPQUEST_KEY = process.env.REACT_APP_MAPQUEST_API_KEY;
// const MAPBOX_KEY = process.env.REACT_APP_MAPBOX_API_KEY;
// const BACKEND_API = 'http://localhost:3000';
const FRONTEND_API = 'https://api.discountapi.com/v2';
const GEOCODING_API = `http://www.mapquestapi.com/geocoding/v1/address?key=${MAPQUEST_KEY}`
let location = '40.7068069,-74.0149976'; // 11 broadway
// let distance = '2';

const get = (url) => {
  // console.log('DEALSKEY',DEALS_KEY);
  // console.log('MAPKEY',MAPQUEST_KEY);
  return fetch(url)
  .then(r => r.json())
}

const getCategories = () => {
  // console.log(DEALS_KEY);
  // console.log(MAPBOX_KEY);
  return get(`${FRONTEND_API}/categories`)
}

// const getUserCategories = () => {
//   return get(`${BACKEND_API}/users`)
// }

const getCategory = (query) => {
  return get(`${FRONTEND_API}/deals?api_key=${DEALS_KEY}&location=${location}&category_slugs=${query}`)
}

const getDeals = (lat,long) => {
  return get(`${FRONTEND_API}/deals?api_key=${DEALS_KEY}&location=${lat},${long}&radius=4`)
}

// const addUserCategory = (slug) => {
//   return fetch(`${BACKEND_API}/user_categories`, {
//     method: 'POST',
//     headers: {
//       // Authorization: token
//       'Content-type' : 'application/json'
//     },
//     body: JSON.stringy({
//       slug: slug
//     })
//   })
// }

const getLatLon = (address) => {
  return get(`${GEOCODING_API}&location=${address}, NY`)
  // .then(data => console.log('lat', data.results[0].locations[0].latLng.lat))
}

const API = {
  getCategories,
  getCategory,
  getDeals,
  // addUserCategory,
  getLatLon
}

export default API;
