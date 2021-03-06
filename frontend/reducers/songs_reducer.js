import { RECEIVE_ALL_SONGS, RECEIVE_SONG, REMOVE_SONG } from "../action/song_actions";

const songsReducer = (state = {}, action ) => {

    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_ALL_SONGS:
            return action.songs;

        case RECEIVE_SONG:
            nextState[action.song.id] = action.song;
            return nextState;

        case REMOVE_SONG:
            delete nextState[action.songId];
            return nextState;

        default:
            return state;
    };
};

export default songsReducer;