// src/utils/api.js
console.log("API base URL:", process.env.REACT_APP_API_URL);

export const baseUrl = process.env.REACT_APP_API_URL;

export const checkResponse = (res) => {
  if (res.ok) return res.json();
  return Promise.reject(`Error: ${res.status}`);
};
// Universal request function
export function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export const getClothingItems = () => {
  return request(`${baseUrl}/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const addClothingItem = (item, token) => {
  return request(`${baseUrl}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: item.name,
      imageUrl: item.imageUrl,
      weather: item.weather,
    }),
  });
};

export const deleteClothingItem = (id, token) => {
  return request(`${baseUrl}/items/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addCardLike = (id, token) => {
  return request(`${baseUrl}/items/${id}/likes`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const removeCardLike = (id, token) => {
  return request(`${baseUrl}/items/${id}/likes`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateUserProfile = ({ name, avatar }, token) => {
  return request(`${baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  });
};
