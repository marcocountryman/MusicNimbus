import { connect } from "react-redux";
import UserShow from "./user";
import { fetchUser } from "../../action/user_actions";

const mSTP = (state, ownProps) => {

    return {
        user: state.entities.users[ownProps.match.params.userId]
    }
}

const mDTP = (dispatch) => {

    return {
        fetchUser: userId => dispatch(fetchUser(userId))
    }
}
export default connect(mSTP, mDTP)(UserShow);