import { connect } from "react-redux";
import UserShow from "./user";
import { fetchUser } from "../../action/user_actions";
import { fetchAllSongs } from "../../action/song_actions";

const mSTP = (state, ownProps) => {

    return {
        user: state.entities.users[ownProps.match.params.userId],
        songs: Object.values(state.entities.songs)
    }
}

const mDTP = (dispatch) => {

    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
        fetchAllSongs: () => dispatch(fetchAllSongs())
    }
}
export default connect(mSTP, mDTP)(UserShow);