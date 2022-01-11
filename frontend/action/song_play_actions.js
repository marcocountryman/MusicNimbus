export const PLAY_SONG = "PLAY_SONG";
export const PAUSE_SONG = "PAUSE_SONG";
export const RECIEVE_PLAY_SONG = "RECIEVE_PLAY_SONG";
export const CLEAR_SONG = "CLEAR_SONG";

export const playSong = () => {

    return {
        type: PLAY_SONG
    };
};

export const pauseSong = () => {

    return {
        type: PLAY_SONG
    };
};

export const recievePlaySong = (song) => {

    return {
        type: RECIEVE_PLAY_SONG,
        song
    };
};

export const clearSong = () => {

    return {
        type: CLEAR_SONG
    }
}