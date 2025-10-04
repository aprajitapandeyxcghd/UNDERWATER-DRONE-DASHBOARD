// src/api.js
 import axios from 'axios';
 
const API_BASE = 'http://localhost:8000'; // Or replace with your PC's IP if needed
/*
export const getLatestData = async () => {
  const response = await axios.get(`${API_BASE}/latest`);
  return response.data;
}; */

// src/api.js
// ✅ This is a mocked version for frontend testing only

export const getLatestData = async () => {
  return {
    temperature: 24.7,
    depth: 5.3,
    image_url: 'frontend/public/dummy.jpeg'  // Provide a placeholder image in public/
  };
};

