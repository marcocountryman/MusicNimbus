export const PLAY_SONG = "PLAY_SONG";
export const PAUSE_SONG = "PAUSE_SONG";
export const RECEIVE_PLAY_SONG = "RECEIVE_PLAY_SONG";
export const CLEAR_SONG = "CLEAR_SONG";

export const playSong = () => {

    return {
        type: PLAY_SONG
    };
};

export const pauseSong = () => {
    // debugger
    return {
        type: PAUSE_SONG
    };
};

export const receivePlaySong = (song) => {

    return {
        type: RECEIVE_PLAY_SONG,
        song
    };
};

export const clearSong = () => {

    return {
        type: CLEAR_SONG
    }
}