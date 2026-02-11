import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = 'https://reqres.in/api/workintech';
const API_KEY = 'reqres_68a0400ceb404f2ab68374c3cb6130b4';

export const sendDataToAPI = async (data) => {
  try {
    console.log('API İsteği Gönderiliyor:', {
      url: API_URL,
      method: 'POST',
      data: data,
      headers: {
        'x-api-key': API_KEY
      }
    });

    const response = await axios.post(API_URL, data, {
      headers: {
        'x-api-key': API_KEY
      }
    });

    console.log('API Yanıtı Alındı:', {
      status: response.status,
      statusText: response.statusText,
      data: response.data
    });

    toast.success('Data successfully sent!');
    return response.data;
  } catch (error) {
    console.error('API Hatası:', {
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      url: error.config?.url
    });
    toast.error('Failed to send data!');
    throw error;
  }
};