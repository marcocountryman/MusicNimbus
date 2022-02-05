import { connect } from "react-redux";
import UserShow from "./user";
import { fetchUser } from "../../action/user_actions";
import { fetchAllSongs, deleteSong } from "../../action/song_actions";
import { fetchAllComments } from "../../action/comment_actions";


const mSTP = (state, ownProps) => {

    return {
        user: state.entities.users[ownProps.match.params.userId],
        songs: Object.values(state.entities.songs),
        comments: Object.values(state.entities.comments),
        currentUserId: state.session.id
    }
}

const mDTP = (dispatch) => {

    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
        fetchAllSongs: () => dispatch(fetchAllSongs()),
        fetchAllComments: () => dispatch(fetchAllComments()),
        deleteSong: songId => dispatch(deleteSong(songId))
    }
}
export default connect(mSTP, mDTP)(UserShow);