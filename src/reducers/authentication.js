import { combineReducers } from 'redux';

const isAuthenticated = (state = false, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      return action.payload.data;
    case 'UNAUTHENTICATE_USER':
      return action.payload.data;
    default:
      return state;
  }
};

const authentication = combineReducers({
  isAuthenticated,
});

export default authentication;
