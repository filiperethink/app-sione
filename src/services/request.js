import axios from 'axios';

const baseURL = 'https://localhost:3000/api';

const Client = axios.create({ baseURL });

export const setAuthToken = token => {
  Client.defaults.headers.Authorization = token;
};

const commonResponse = (err, res) => {
  if (err) {
    return { success: false, error: err, data: null };
  }
  return { success: true, error: null, data: res.data };
};

export const createRequestFactory = servicePath => {
  const request = (method, path, obj) => new Promise(resolve => {
    const options = {
      method,
      headers: {},
    };
    if (obj) {
      options.headers.Accept = 'application/json';
      options.headers['Content-Type'] = 'application/json';
      options.data = obj;
    }
    options.url = servicePath + path;

    Client.request(options)
      .then(response => {
        resolve(commonResponse(null, response));
      })
      .catch(error => {
        resolve(commonResponse(error));
      });
  });

  const get = (path = '', obj) => request('GET', path, obj);

  const post = (path = '', obj) => request('POST', path, obj);

  const put = (path = '', obj) => request('PUT', path, obj);

  const deleteMethod = (path = '', obj) => request('DELETE', path, obj);

  return {
    get,
    post,
    put,
    delete: deleteMethod,
  };
};
