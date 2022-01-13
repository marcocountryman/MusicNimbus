import { RECEIVE_SONG_ERRORS, REMOVE_SONG_ERRORS } from "../action/song_actions";

const songsErrorsReducer = (state = [], action) => {

    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_SONG_ERRORS:
            return action.errors;

        case REMOVE_SONG_ERRORS:
            return [];

        default:
            return state;
    };
};

export default songsErrorsReducer;