import { connect } from "react-redux";
import { createComment } from '../../action/comment_actions';
import CommentForm from "./comment_form";
import { withRouter } from "react-router-dom";
import { openModal } from '../../action/modal_actions';

const mSTP = (state) => {

    return {
        currentUser: state.entities.users[state.session.id]
    };
};

const mDTP = dispatch => {

    return {
        createComment: comment => dispatch(createComment(comment)),
        openModal: modal => dispatch(openModal(modal))
    };
};

export default withRouter(connect(mSTP,mDTP)(CommentForm));