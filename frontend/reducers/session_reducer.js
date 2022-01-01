import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../action/session_actions";

const _defaultSession = {
    id: null,
};

const sessionReducer = (state = _defaultSession, action) => {
    Object.freeze(state);
    const nextState = Object.assign({},state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            nextState.id = action.currentUser.id
            return nextState;

        case LOGOUT_CURRENT_USER:
            return _defaultSession;

        default:
            return state;
    }
}
export default sessionReducer;