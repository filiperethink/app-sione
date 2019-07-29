import axios from 'axios';

const baseURL = 'http://localhost:3001/api';

export const setAxiosDefaults = () => {
  axios.defaults.headers.common['Content-Type'] =
    'application/json; charset=utf-8';
};

export const setAuthToken = (token, type) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `${type} ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export const clearAxiosDefaults = () => {
  axios.defaults.headers.common['Content-Type'] = '';
  axios.defaults.baseURL = '';
};

export const API = axios.create({
  baseURL: baseURL,
  crossDomain: true,
});
