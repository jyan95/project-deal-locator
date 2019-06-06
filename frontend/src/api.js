require('dotenv').config();
const DEALS_KEY = process.env.DEALS_API_KEY;
// const MAPBOX_KEY = process.env.MAPBOX_API_KEY;
const BACKEND_API = 'http://localhost:3000';
const FRONTEND_API = 'https://api.discountapi.com/v2';
let location = '40.7068069,-74.0149976'; // 11 broadway
// let distance = '2';

const get = (url) => {
  return fetch(url)
  .then(r => r.json())
}

const getCategories = () => {
  // console.log(DEALS_KEY);
  // console.log(MAPBOX_KEY);
  return get(`${FRONTEND_API}/categories`)
}

const getCategory = (query) => {
  return get(`${FRONTEND_API}/deals?api_key=${DEALS_KEY}&location=${location}&category_slugs=${query}`)
}

const addUserCategory = (data) => {
  return fetch(`${BACKEND_API}/user_categories`, {
    method: 'POST',
    headers: {
      // Authorization: token
      'Content-type' : 'application/json'
    },
    body: JSON.stringy({
      user_id: data.user_id,
      category_id: data.category_id
    })
  })
}

const API = {
  getCategories,
  getCategory,
  addUserCategory
}

export default API;
