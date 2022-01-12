import { connect } from 'react-redux';
import SongPlayer from './song_player';
import { receivePlaySong, playSong, pauseSong } from '../../action/song_play_actions';

const mSTP = (state) => {

    return {
        currentSong: state.ui.songPlayer.currentSong,
        isPlaying: state.ui.songPlayer.isPlaying
    };
};

const mDTP = (dispatch) => {

    return {
        playSong: () => dispatch(playSong()),
        pauseSong: () => dispatch(pauseSong()),
        receivePlaySong: song => dispatch(receivePlaySong(song))
    };
};

export default connect(mSTP, mDTP)(SongPlayer);