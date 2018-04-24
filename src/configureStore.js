import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

const configureStore = () => {
  const store = createStore(
    rootReducer,
    // logger has to be the last middleware in the chain
    applyMiddleware(thunk, promise(), logger)
  );

  return store;
};

export default configureStore;
