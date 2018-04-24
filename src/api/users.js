//import {API_URL} from 'api';

export const getToken = username => {
  return new Promise((resolve, reject) => {
    if (username.length >= 4) {
      setTimeout(() => {
        resolve('secret-token-code');
      }, 1000);
    } else {
      setTimeout(() => {
        reject('invalid username');
      }, 1000);
    }
  });
};
