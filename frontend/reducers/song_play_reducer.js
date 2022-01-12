import { PLAY_SONG, PAUSE_SONG, RECEIVE_PLAY_SONG, CLEAR_SONG } from "../action/song_play_actions";

const _nullPlay = {
    currentSong: null,
    isPlaying: false
};

const songPlayReducer = (state = _nullPlay, action) => {
    
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_PLAY_SONG:
            nextState.currentSong = action.song
            nextState.isPlaying = true;
            return nextState;

        case PLAY_SONG:
            nextState.isPlaying = true;
            return nextState;

        case PAUSE_SONG:
            nextState.isPlaying = false;
            return nextState;

        case CLEAR_SONG:
            return _nullPlay;
        default:
            return state;
    };
};

export default songPlayReducer;