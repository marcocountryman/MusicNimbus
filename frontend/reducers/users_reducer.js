import { RECEIVE_CURRENT_USER } from "../action/session_actions";
import { RECEIVE_USER } from "../action/user_actions";

const usersReducer = (state = {}, action) => {
    
    Object.freeze(state);
    // debugger
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });

        case RECEIVE_USER:
            return Object.assign({}, state, { [action.user.id]: action.user })
        
        default:
        return state;
    }
}
export default usersReducer;