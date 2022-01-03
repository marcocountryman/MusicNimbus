import { connect } from "react-redux";
import { signup, login } from '../../action/session_actions';
import SignupForm from "./signup_form";

const mSTP = (state) => {

    return {
        errors: state.errors.session
    };
};

const mDTP = (dispatch) => {

    return {
        signup: user => dispatch(signup(user)),
        login: user => dispatch(login(user))
    };
};
export default connect(mSTP,mDTP)(SignupForm);

