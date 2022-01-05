import React from 'react';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import { connect } from 'react-redux';
import { closeModal } from '../../action/modal_actions';

const Modal = ({modal, closeModal}) => {
    

    if (!modal) {
        return null;
    }
    let component;
    switch(modal) {
        case 'login':
        component = <LoginFormContainer/>;
        break;

        case 'signup':
        component = <SignupFormContainer/>;
        break;

        default:
            return null;
    };
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    );
    
}

const mSTP = state => {
    
    return {
        modal: state.ui.modal
    };
};

const mDTP = dispatch => {
    
    return {
        closeModal: () => dispatch(closeModal())
    };
};
export default connect(mSTP,mDTP)(Modal);