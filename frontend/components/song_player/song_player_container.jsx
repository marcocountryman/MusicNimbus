import { connect } from 'react-redux';
import SongPlayer from './song_player';
import { receivePlaySong, playSong, pauseSong, clearSong } from '../../action/song_play_actions';

const mSTP = (state) => {

    return {
        currentSong: state.ui.songPlayer.currentSong,
        isPlaying: state.ui.songPlayer.isPlaying,
        userId: state.session.id
    };
};

const mDTP = (dispatch) => {

    return {
        playSong: () => dispatch(playSong()),
        pauseSong: () => dispatch(pauseSong()),
        receivePlaySong: song => dispatch(receivePlaySong(song)),
        clearSong: () => dispatch(clearSong())
    };
};

export default connect(mSTP, mDTP)(SongPlayer);