import * as api from 'api/users';

export const fetchUserToken = username => ({
  type: 'FETCH_USER_TOKEN',
  payload: api.getToken(username),
});

export const destroyUserToken = () => ({
  type: 'DESTROY_USER_TOKEN',
  payload: { data: 'Token has been destroyed' },
});
