import axios from 'axios';

const API_BASE = 'https://portfolio-bqmz.onrender.com';

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getResumeData = async () => {
  const response = await api.get('/api/resume');
  return response.data;
};

export const submitContactForm = async (data) => {
  const response = await api.post('/api/contact', data);
  return response.data;
};

export default api;
