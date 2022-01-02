import { connect } from "react-redux";
import { signup } from '../../action/session_actions';
import SessionForm from "./session_form";

const mSTP = (state) => {

    return {
        errors: state.errors.session,
        formType: "signup"
    };
};

const mDTP = (dispatch) => {

    return {
        processForm: user => dispatch(signup(user))
    };
};
export default connect(mSTP,mDTP)(SessionForm);

