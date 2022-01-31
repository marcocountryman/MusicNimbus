import { connect } from "react-redux";
import CommentThread from "./comment_thread";
import { deleteComment } from "../../action/comment_actions";


const mSTP = (state) => {
    
    return {
        currentUser: state.entities.users[state.session.id],
        comments: Object.values(state.entities.comments)
    }
}

const mDTP = (dispatch) => {

    return {
        deleteComment: commentId => dispatch(deleteComment(commentId))
    }
}

export default connect(mSTP,mDTP)(CommentThread);