import createAction from "redux-actions/es/createAction";


export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginError = createAction('LOGIN_ERROR');
export const loginRequest = createAction('LOGIN_REQUEST', (email,password) => ({credentials: {email, password}}));

export const logoutSuccess = createAction('LOGOUT_SUCCESS');
export const logoutError = createAction('LOGOUT_ERROR');
export const logoutRequest = createAction('LOGOUT_REQUEST');
