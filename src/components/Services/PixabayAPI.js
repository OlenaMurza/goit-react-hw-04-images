import axios from 'axios';

const searchParams = new URLSearchParams({
  key: '33118592-fe55a1628e08196b0e966d7a0',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  const response = await axios.get(`?q=${query}&page=${page}&${searchParams}`);
  const data = response.data;
  return data;
};

