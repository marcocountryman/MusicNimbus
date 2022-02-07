import { CLOSE_MODAL, OPEN_MODAL } from "../action/modal_actions";


const modalIdReducer = (state = null, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return action.id ? action.id : null;
        case CLOSE_MODAL:
            return null;
        default:
            return state;

    }
};

export default modalIdReducer;