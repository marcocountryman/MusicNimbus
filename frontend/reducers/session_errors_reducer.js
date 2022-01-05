import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, REMOVE_SESSION_ERRORS } from "../action/session_actions";
import { CLOSE_MODAL } from '../action/modal_actions';
const sessionErrors = (state = [], action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;

        case RECEIVE_CURRENT_USER:
            return [];

        case REMOVE_SESSION_ERRORS:
            return [];
    
        case CLOSE_MODAL:
            return [];

        default:
            return state;
    }
}
export default sessionErrors;