const baseUrl = 'http://localhost:3001';

// CHANGED: Added checkResponse function to avoid repeating response-checking logic
export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const getClothingItems = () => {
  return fetch(`${baseUrl}/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  // CHANGED: Replaced repeated response checking with checkResponse
  .then(checkResponse);
};

export const addClothingItem = (item) => {
  return fetch(`${baseUrl}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: item.name,
      imageUrl: item.imageUrl,
      weather: item.weather,
    }),
  })
  // CHANGED: Replaced repeated response checking with checkResponse
  .then(checkResponse);
};

export const deleteClothingItem = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  // CHANGED: Replaced repeated response checking with checkResponse
  .then(checkResponse);
};