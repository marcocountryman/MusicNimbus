import { connect } from "react-redux";
import CommentThread from "./comment_thread";
import { deleteComment, fetchAllComments } from "../../action/comment_actions";
import { withRouter } from "react-router-dom";


const mSTP = (state) => {
    
    return {
        currentUser: state.entities.users[state.session.id],
        comments: Object.values(state.entities.comments)
    }
}

const mDTP = (dispatch) => {

    return {
        deleteComment: commentId => dispatch(deleteComment(commentId)),
        fetchAllComments: () => dispatch(fetchAllComments())
    }
}

export default withRouter(connect(mSTP,mDTP)(CommentThread));