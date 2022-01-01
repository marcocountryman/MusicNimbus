import * as PostApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) => {

    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}
export const logoutCurrentUser = () => {

    return {
        type: LOGOUT_CURRENT_USER,
    }
}

export const receiveErrors = (errors) => {

    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

export const signup = user => dispatch => {
  
  return PostApiUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
};

export const login = user => dispatch => {
    
  return PostApiUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
};

export const logout = () => dispatch => {
  
  return PostApiUtil.logout().then(user => (
    dispatch(logoutCurrentUser())
  ))
};
