import axios from 'axios';

import { Platform } from "react-native";

const BASE_URL = Platform.OS === 'android' ? 'http://10.0.2.2:8000' : 'http://127.0.0.1:8000';

// GET request function
export const getApi = async (endpoint: string) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    throw error;  // Propagate error to be handled by TanStack Query
  }
};

// POST request function
export const postApi = async (endpoint: string, data: any) => {
  try {
    const response = await axios.post(`${BASE_URL}${endpoint}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};