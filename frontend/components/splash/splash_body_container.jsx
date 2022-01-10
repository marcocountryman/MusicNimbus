import SplashBody from "./splash_body";
import { connect } from 'react-redux';
import { openModal } from "../../action/modal_actions";


const mSTP = (state) => {

    return {
        song: state.entities.songs[ownProps.match.params.id],
        songs: Object.values(state.entities.songs)
    }
}

const mDTP = (dispatch) => {

    return {
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(mSTP, mDTP)(SplashBody);