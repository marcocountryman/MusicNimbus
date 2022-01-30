import { RECEIVE_SONG } from "../action/song_actions";
import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../action/comment_actions";

const commentsReducer = (state = {}, action) => {

    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment;
            return nextState;

        case REMOVE_COMMENT:
            delete nextState[action.commendId];
            return nextState;

        case RECEIVE_SONG:
            return Object.assign({}, action.song.comments)
        
        default:
            return state;
    };
};

export default commentsReducer;