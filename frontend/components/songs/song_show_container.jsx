import { connect } from 'react-redux';
import SongShow from './song_show';
import { fetchSong, deleteSong } from '../../action/song_actions';
import { fetchAllComments } from '../../action/comment_actions';

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
        fetchAllComments: () => dispatch(fetchAllComments())
    }
}

export default connect(mSTP,mDTP)(SongShow);