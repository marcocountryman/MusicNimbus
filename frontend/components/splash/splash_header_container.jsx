import SplashHeader from "./splash_header";
import React from 'react';
import { connect } from 'react-redux';
import { openModal } from "../../action/modal_actions";

const mDTP = (dispatch) => {

    return {
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(null, mDTP)(SplashHeader);