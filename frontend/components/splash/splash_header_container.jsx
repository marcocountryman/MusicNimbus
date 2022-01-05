import SplashHeader from "./splash_header";
import React from 'react';
import { connect } from 'react-redux';
import { openModal } from "../../action/modal_actions";

const mDTP = (dispatch) => {

    return {
        openLogin: () => dispatch(openModal('login')),
        openSignup: () => dispatch(openModal('signup'))
    }
}

export default connect(null, mDTP)(SplashHeader);