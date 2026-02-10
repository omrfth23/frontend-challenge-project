import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = 'https://reqres.in/api/workintech';

export const sendDataToAPI = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    toast.success('Data successfully sent!');
    return response.data;
  } catch (error) {
    toast.error('Failed to send data!');
    console.error('API Error:', error);
    throw error;
  }
};