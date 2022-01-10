import SplashBody from "./splash_body";
import { connect } from 'react-redux';
import { openModal } from "../../action/modal_actions";
import { fetchAllSongs } from "../../action/song_actions";


const mSTP = (state) => {

    return {
        songs: Object.values(state.entities.songs)
    }
}


const mDTP = (dispatch) => {

    return {
        openModal: modal => dispatch(openModal(modal)),
        fetchAllSongs: () => dispatch(fetchAllSongs())
    }
}

export default connect(mSTP, mDTP)(SplashBody);