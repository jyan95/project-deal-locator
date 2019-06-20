import { lat , lon } from './App';

const DEALS_KEY = process.env.REACT_APP_DEALS_API_KEY;
const MAPQUEST_KEY = process.env.REACT_APP_MAPQUEST_API_KEY;
const BACKEND_API = 'http://localhost:3000/api/v1';
const FRONTEND_API = 'https://api.discountapi.com/v2';
const GEOCODING_API = `http://www.mapquestapi.com/geocoding/v1/address?key=${MAPQUEST_KEY}`;
const LOGIN_URL = 'http://localhost:3000/api/v1/login';
const SIGNUP_URL = 'http://localhost:3000/api/v1/signup';
// let location = '40.7068069,-74.0149976'; // 11 broadway

//*****************************************************************************
// GET FETCHES
//*****************************************************************************
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
  // .catch(console.log)
}

const getDeal = (id) => {
  return get(`${FRONTEND_API}/deals/${id}`)
}

const getDeals = (lat,lon,page) => {
  return get(`${FRONTEND_API}/deals?api_key=${DEALS_KEY}&location=${lat},${lon}&radius=2&page=${page}`)
}

const getCategoryDeals = (query,queryPage) => {
  return get(`${FRONTEND_API}/deals?api_key=${DEALS_KEY}&location=${lat},${lon}&category_slugs=${query}&page=${queryPage}`)
}

const getCategories = () => {
  return get(`${FRONTEND_API}/categories`)
}

const getUserDeals = (token) => {
  return fetch(`${BACKEND_API}/user-deals`,{
    headers: {
      Authorization: token
    }
  })
  .then(r => r.json())
  // .then(console.log)
    // fetch(`${BACKEND_API}/user-deals`,{
    //   headers: {
    //     Authorization: token
    //   }
    // })
    // .then(r=>r.json())
    // .then(data => {
    //   data.map(d => {
    //   let deals = [];
    //   get(`${FRONTEND_API}/deals/${d.frontend_id}`)
    //   .then(data => deals.push(data.deal))
    //   })
    //   return deals
    // })
}

const getUserAddedDeals = () => {
  return get(`${BACKEND_API}/added-deals`)
}

const getLatLon = (address) => {
  return get(`${GEOCODING_API}&location=${address}, NY`)
  // .then(data => console.log('lat', data.results[0].locations[0].latLng.lat))
}

const getLastAdded = () => {
  return get(`${BACKEND_API}/last-added`)
}

//*****************************************************************************
// POST FETCHES
//*****************************************************************************

// const addUserCategory = (slug) => {
//   return fetch(`${BACKEND_API}/user_categories`, {
//     method: 'POST',
//     headers: {
//       // Authorization: token,
//       'Content-Type' : 'application/json'
//     },
//     body: JSON.stringify({
//       slug: slug
//     })
//   })
// }

// const addUserDeal = (user, deal, token) => {
//   return fetch(`${BACKEND_API}/add-deal`,{
//     method: 'POST',
//     headers: {
//       Authorization: token,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       user_id: user.id,
//       deal_id: deal.id
//     })
//   })
// }

const addUserDeal = (id, token) => {
  // console.log('adding user deal', id, token);
  return fetch(`${BACKEND_API}/add-deal/${id}`,{
    method: 'POST',
    headers: {
      Authorization: token
    },
    body: JSON.stringify({
      deal_id: id
    })
  })
}

const addDealToMap = (token, formData, lat, lon) => {
  // console.log('in fetch', formData, lat, lon);
  // debugger
  return fetch(`${BACKEND_API}/add-deal-to-map`,{
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: formData.name,
      description: formData.description,
      lat: lat,
      lon: lon,
      expiration: formData.expiration
    })
  })
}

const login = (formData) => {
  // console.log('API login', formData);
  return fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  
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
    const { token } = data;
    localStorage.setItem('token', token);
  })
}

const editUser = (token, formData) => {
  console.log('editing user', formData);
  return fetch(`${BACKEND_API}/edit-user`,{
    method: 'PATCH',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
}

//*****************************************************************************
// DELETE FETCHES
//*****************************************************************************

const removeDeal = (id) => {
  return fetch(`${BACKEND_API}/unfollow-deal/${id}`,{method: 'DELETE'})
}

const deleteAddedDeal = (id) => {
  return fetch(`${BACKEND_API}/delete-added-deal/${id}`,{method:'DELETE'})
}

const deleteUser = () => {
  return fetch(`${BACKEND_API}/delete-user`, {method:'DELETE'})
}

//*****************************************************************************
// EXPORTED FUNCTIONS
//*****************************************************************************

const API = {
  getUser,
  getDeal,
  getDeals,
  getCategoryDeals,
  getCategories,
  getUserDeals,
  getUserAddedDeals,
  getLatLon,
  getLastAdded,

  addUserDeal,
  addDealToMap,

  login,
  signup,

  editUser,

  removeDeal,
  deleteAddedDeal,
  deleteUser
};

export default API;
