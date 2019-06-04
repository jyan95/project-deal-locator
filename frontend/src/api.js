const BACKEND_API = 'http://localhost:3000';

const get = (url) => {
  return fetch(url)
  .then(r => r.json());
}

const getCategories = () => {
  return get(`${BACKEND_API}/categories`);
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

const API_FUNCITONS = {
  getCategories,
  addUserCategory
}

export default API_FUNCITONS;
