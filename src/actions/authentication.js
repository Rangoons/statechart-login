export const authenticateUser = () => ({
  type: 'AUTHENTICATE_USER',
  payload: { data: true },
});

export const unauthenticateUser = () => ({
  type: 'UNAUTHENTICATE_USER',
  payload: { data: false },
});
