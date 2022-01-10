export const fetchSongs = () => {

    return $.ajax({
        url: `api/songs`
    });
};

export const fetchSong = (songId) => {

    return $.ajax({
        url: `/api/songs/${songId}`
    });
};

export const createSong = (song) => {
    debugger
    return $.ajax({
        method: 'POST',
        url: `/api/songs`,
        data: { song },
        contentType: false,
        processData: false
    });
};

export const updateSong = (currentSong, updateSong) => {

    debugger
    return $.ajax({
        method: 'PATCH',
        url: `/api/songs/${currentSong.id}`,
        data: { updateSong },
        contentType: false,
        processData: false
    });
};

export const deleteSong = (songId) => {

    return $.ajax({
        method: 'DELETE',
        url: `/api/songs/${songId}`
    });
};