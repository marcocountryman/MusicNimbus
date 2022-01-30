import { connect } from "react-redux";
import { createComment } from '../../action/comment_actions';
import CommentForm from "./comment_form";
import { withRouter } from "react-router-dom";
const mSTP = (state) => {

    return {
        currentUser: state.entities.users[state.session.id]
    };
};

const mDTP = dispatch => {

    return {
        createComment: comment => dispatch(createComment(comment))
    };
};

export default withRouter(connect(mSTP,mDTP)(CommentForm));