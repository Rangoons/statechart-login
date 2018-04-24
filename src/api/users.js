//import {API_URL} from 'api';

export const getToken = username => {
  return new Promise((resolve, reject) => {
    if (username) {
      setTimeout(() => {
        resolve({ data: 'secret-token-code' });
      }, 1000);
    } else {
      setTimeout(() => {
        reject({ msg: 'invalid username' });
      }, 1000);
    }
  });
};
