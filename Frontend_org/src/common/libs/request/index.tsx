import axios from 'axios';
import { state, stateActions } from '../../state';

export const request = axios.create({
  method: 'POST',
  baseURL: import.meta.env.VITE_REQUEST_BASE_URL || '/api/customer',  
  timeout: 60000,
  headers: { 'Content-Type': 'application/json' },
});

request.interceptors.request.use((config) => {
  // if (!config.url?.includes('login')) stateActions.addLoading();
  config.headers.account = JSON.stringify(state.storage ?? '');
  config.headers.authorization =
    'Bearer ' + (state.storage.token?.access_token ?? '0');
  return config;
});

request.interceptors.response.use(
  (response) => {
    stateActions.subLoading();
    const data = response.data;
    // console.log("response:", response);
    if (![200, 201].includes(response.status)) {
      return Promise.reject(response.data);
    }
    if (data.code === 10000) {
      console.log(window.location.href);
      if (location.pathname !== '/') location.href = '/';
      return Promise.reject(response.data);
    } else if (data.code !== 0) return Promise.reject(response.data);
    return Promise.resolve(data);

    // notification.error({
    //     message: `请求错误 ${response.statusText}: ${response}`,
    //     description: data || response.statusText || 'Error',
    // });

    // if (response.status === 401) {
    //   window.location.href = "/login";
    // }

    return Promise.reject(new Error(response.statusText || 'Error'));
  },
  (error) => {
    stateActions.subLoading();
    console.log('err:', error, error.response); // for debug
    if (error.response && error.response.status) {
      
    }
    // throw new Error(error);
    return Promise.reject(error);
  },
);
