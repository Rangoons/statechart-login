export const authenticateUser = () => ({
  type: 'AUTHENTICATE_USER',
  payload: { data: true },
});

export const unauthenticateUser = () => ({
  type: 'UNAUTHENTICATE_USER',
  payload: { data: false },
});

export const updateAuthMachineState = state => ({
  type: 'UPDATE_AUTH_MACHINE_STATE',
  payload: state,
});
