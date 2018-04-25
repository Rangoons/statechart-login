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

const machineState = (state = 'unauthenticated', action) => {
  switch (action.type) {
    case 'UPDATE_AUTH_MACHINE_STATE':
      return action.payload;
    default:
      return state;
  }
};

const authentication = combineReducers({
  isAuthenticated,
  machineState,
});

export default authentication;
