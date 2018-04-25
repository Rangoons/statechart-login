import { combineReducers } from 'redux';
import users from 'reducers/users';
import authentication from 'reducers/authentication';

const rootReducer = combineReducers({
  users,
  authentication,
});

export default rootReducer;
