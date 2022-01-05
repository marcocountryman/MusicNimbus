import { connect } from "react-redux";
import { login } from '../../action/session_actions';
import LoginForm from "./login_form";
import { openModal, closeModal } from "../../action/modal_actions";

const mSTP = (state) => {

    return {
        errors: state.errors.session
    };
};

const mDTP = (dispatch) => {

    return {
        login: user => dispatch(login(user)),
        openModal: () => dispatch(openModal('signup')),
        closeModal: () => dispatch(closeModal())
    };
};
export default connect(mSTP,mDTP)(LoginForm);

