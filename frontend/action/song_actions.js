import * as SongApiUtil from '../util/songs_api_util';

export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const REMOVE_SONG = "REMOVE_SONG";
export const RECEIVE_SONG_ERRORS = "RECEIVE_SONG_ERRORS";
export const REMOVE_SONG_ERRORS = "REMOVE_SONG_ERRORS";

const receiveAllSongs = (songs) => {

    return {
        type: RECEIVE_ALL_SONGS,
        songs
    };
};

const receiveSong = (song) => {

    return {
        type: RECEIVE_SONG,
        song
    };
};

const removeSong = (songId) => {

    return {
        type: REMOVE_SONG,
        songId
    };
};

const receiveSongErrors = (errors) => {

    return {
        type: RECEIVE_SONG_ERRORS,
        errors
    };
};

export const removeSongErrors = () => {

    return {
        type: REMOVE_SONG_ERRORS
    };
};

export const fetchAllSongs = () => dispatch => {

    return SongApiUtil.fetchSongs()
}