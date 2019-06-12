const DEALS_KEY = process.env.REACT_APP_DEALS_API_KEY;
const MAPQUEST_KEY = process.env.REACT_APP_MAPQUEST_API_KEY;
// const MAPBOX_KEY = process.env.REACT_APP_MAPBOX_API_KEY;
const BACKEND_API = 'http://localhost:3000/api/v1';
const FRONTEND_API = 'https://api.discountapi.com/v2';
const GEOCODING_API = `http://www.mapquestapi.com/geocoding/v1/address?key=${MAPQUEST_KEY}`;
const LOGIN_URL = 'http://localhost:3000/api/v1/login';
const SIGNUP_URL = 'http://localhost:3000/api/v1/signup';
let location = '40.7068069,-74.0149976'; // 11 broadway
// let distance = '2';

const get = (url) => {
  // console.log('DEALSKEY',DEALS_KEY);
  // console.log('MAPKEY',MAPQUEST_KEY);
  return fetch(url)
  // .then(console.log)
  .then(r => r.json())
}

const getUser = (token) => {
  return fetch(`${BACKEND_API}/set-user`,{
    headers: {
      Authorization: token
    }
  })
  .then(r => r.json())
  .then(console.log)
  // .catch(console.log)
}

const getCategories = () => {
  return get(`${FRONTEND_API}/categories`)
}

// const getUserCategories = () => {
//   return get(`${BACKEND_API}/users`)
// }

const getCategory = (query,queryPage) => {
  return get(`${FRONTEND_API}/deals?api_key=${DEALS_KEY}&location=${location}&category_slugs=${query}&page=${queryPage}`)
}

const getDeals = (lat,lon,page) => {
  return get(`${FRONTEND_API}/deals?api_key=${DEALS_KEY}&location=${lat},${lon}&radius=2&page=${page}`)
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

const login = (formData) => {
  console.log('API login', formData);
  return fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(r => r.json())
  // .then(data => {
  //   const { token, user } = data;
  //   localStorage.setItem('token', token);
  // })
}

const signup = (formData) => {
  console.log('signing up', formData);
  return fetch(SIGNUP_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(r => r.json())
  .then(data => {
    const { token, user } = data;
    localStorage.setItem('token', token);
  })
}

const API = {
  getCategories,
  getCategory,
  getDeals,
  // addUserCategory,
  getLatLon,
  getUser,
  login,
  signup
}

export default API;
