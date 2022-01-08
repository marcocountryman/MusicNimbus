import { connect } from 'react-redux';
import SongShow from './song_show';
import { fetchSong, updateSong, deleteSong } from '../../action/song_actions';

const mSTP = (state) => {

    return {

    }
}

const mDTP = (dispatch) => {

    return {

    }
}

export default connect(mSTP,mDTP)(SongShow);