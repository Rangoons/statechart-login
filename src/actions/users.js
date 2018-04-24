import * as api from 'api/users';

export const fetchUserToken = username => {
  return api.getToken(username);
};
