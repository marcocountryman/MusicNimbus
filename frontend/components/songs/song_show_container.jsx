import { connect } from 'react-redux';
import SongShow from './song_show';
import { fetchSong, updateSong, deleteSong } from '../../action/song_actions';

const mSTP = (state, ownProps) => {

    // debugger

    return {
        song: state.entities.songs[ownProps.match.params.id]
    }
}

const mDTP = (dispatch) => {

    return {
        fetchSong: songId => dispatch(fetchSong(songId)),
        updateSong: song => dispatch(updateSong(song)),
        deleteSong: songId => dispatch(deleteSong(songId))
    }
}

export default connect(mSTP,mDTP)(SongShow);