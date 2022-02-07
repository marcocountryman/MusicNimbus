import { connect } from 'react-redux';
import SongShow from './song_show';
import { fetchSong, updateSong, deleteSong } from '../../action/song_actions';

const mSTP = (state, ownProps) => {

    return {
        song: state.entities.songs[ownProps.match.params.id],
        songs: Object.values(state.entities.songs)
    }
}

const mDTP = (dispatch) => {

    return {
        fetchSong: songId => dispatch(fetchSong(songId)),
        fetchAllSongs: () => dispatch(fetchAllSongs()),
        deleteSong: songId => dispatch(deleteSong()),
        updateSong: song => dispatch(updateSong(song))
    }
}

export default connect(mSTP,mDTP)(SongShow);