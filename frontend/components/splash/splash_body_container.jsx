import SplashBody from "./splash_body";
import { connect } from 'react-redux';
import { openModal } from "../../action/modal_actions";

const mDTP = (dispatch) => {

    return {
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(null, mDTP)(SplashBody);