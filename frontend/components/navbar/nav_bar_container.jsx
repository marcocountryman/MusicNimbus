import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../action/session_actions';

const mSTP = (state) => {

    return {
        currentUser: state.entities.users[state.session.id]
    };
};

const mDTP = (dispatch) => {

    return {
        logout: () => dispatch(logout())
    };
};

export default connect(mSTP, mDTP)(NavBar);