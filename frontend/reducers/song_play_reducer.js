import { PLAY_SONG, PAUSE_SONG, RECIEVE_PLAY_SONG } from "../action/song_play_actions";

const _nullPlay = {
    currentSong: null,
    isPlaying: false
};

const songPlayReducer = (state, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type) {
        case RECIEVE_PLAY_SONG:
            nextState.currentSong = action.song
            nextState.isPlaying = true;
            return nextState;

        case PLAY_SONG:
            nextState.isPlaying = true;
            return nextState;

        case PAUSE_SONG:
            nextState.isPlaying = false;
            return nextState;
        default:
            return state;
    };
};

export default songPlayReducer;