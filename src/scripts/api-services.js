import axios from 'axios';
import {ProjectUrl} from '../common/config';

const api = axios.create({
  baseURL: ProjectUrl,
});

// interceptor
api.interceptors.request.use(
  async config => {
    let token = '';
    //console.log("Token", token);
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },

  error => {
    return Promise.reject(error);
  },
);
// post api
export const postApi = async (
  path,
  data = {},
  headers = {Accept: 'application/json'},
) => {
  var result = await new Promise((resolve, reject) => {
    api
      .post(path, data, {
        headers: headers,
      })
      .then(response => {
        console.log(response);
        return resolve(response);
      })
      .catch(error => {
        //! NOTE - use "error.response.data` (not "error")
        console.log('hey post api error');
        console.log(error.response.data);
        error.response.data;
      });
  });
  return result;
};

// get api
export const getApi = async (
  path,
  data = {},
  headers = {Accept: 'application/json'},
) => {
  var result = await new Promise((resolve, reject) => {
    api
      .get(path, data, {
        headers: headers,
      })
      .then(response => resolve(response.data))
      .catch(error => {
        return reject(error.response.data);
      });
    api.get;
  });
  return result;
};
