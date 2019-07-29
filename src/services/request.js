import axios from 'axios';
import qs from 'qs';
import { commonResponse } from '~/util';

const baseURL = 'http://localhost:3001/api';

const Client = axios.create({ baseURL });

export const setAuthToken = token => {
  Client.defaults.headers.Authorization = `Bearer ${token}`;
};

export const createRequestFactory = servicePath => {
  const request = (method, path, obj, customHeaders) =>
    new Promise(resolve => {
      const options = {
        method,
        headers: {},
      };
      if (obj && customHeaders && !customHeaders['Content-Type']) {
        options.headers.Accept = 'application/json';
        options.headers['Content-Type'] = 'application/json';
        options.data = obj;
      }
      if (customHeaders) {
        options.headers = { ...options.headers, ...customHeaders };
      }
      if (
        customHeaders &&
        customHeaders['Content-Type'] === 'application/x-www-form-urlencoded'
      ) {
        options.data = qs.stringify(obj);
      }

      options.url = servicePath + path;

      Client.request(options)
        .then(response => {
          resolve(commonResponse(null, response));
        })
        .catch(error => {
          resolve(commonResponse(null, error.response.data));
        });
    });

  const get = (path = '', obj, headers) => request('GET', path, obj, headers);

  const post = (path = '', obj, headers) => request('POST', path, obj, headers);

  const put = (path = '', obj, headers) => request('PUT', path, obj, headers);

  const deleteMethod = (path = '', obj, headers) =>
    request('DELETE', path, obj, headers);

  return {
    get,
    post,
    put,
    delete: deleteMethod,
  };
};
