const authentication = {
  key: 'authentication',
  //start in the idle state
  initial: 'unauthenticated',
  states: {
    unauthenticated: {
      on: {
        //when a 'LOGIN' even occurs, transition to the loading state
        LOGIN: 'loading',
      },
    },
    loading: {
      on: {
        //when a 'loading' request receives a 'SUCCESS' event, transition to 'authenticated' state
        SUCCESS: 'authenticated',
        //however, if the 'loading request receives a 'FAILURE' event, transition to the 'error' state
        FAILURE: 'error',
      },
      onEntry: ['sendLoginRequest'],
    },
    error: {
      on: {
        LOGIN: 'loading',
      },
    },
    authenticated: {
      on: {
        //when a 'LOGOUT' event occurs, transition to the unauthenticated state
        LOGOUT: 'unauthenticated',
      },
    },
  },
};

export default authentication;
