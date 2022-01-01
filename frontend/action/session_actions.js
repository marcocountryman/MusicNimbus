import * as PostApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = (user) => {

    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}
const logoutCurrentUser = () => {

    return {
        type: LOGOUT_CURRENT_USER,
    }
}

const receiveErrors = (errors) => {

    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

export const login = (user) => (dispatch) => PostApiUtil.login(user)
.then(user => (receiveCurrentUser(user)), error => (dispatch(receiveErrors(error.responseJSON))));

export const signup = (user) => (dispatch) => PostApiUtil.signup(user)
.then(user => (receiveCurrentUser(user)), error => (dispatch(receiveErrors(error.responseJSON))));

export const logout = () => (dispatch) => PostApiUtil.logout()
.then(user => dispatch(logoutCurrentUser()));