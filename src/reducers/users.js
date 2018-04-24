import { combineReducers } from 'redux';

const token = (state = '', action) => {
  switch (action.type) {
    case 'FETCH_USER_TOKEN_FULFILLED':
      return action.payload.data;
    default:
      return state;
  }
};

const users = combineReducers({
  token,
});

export default users;
