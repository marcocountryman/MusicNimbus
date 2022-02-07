import { connect } from "react-redux";
import { createComment } from '../../action/comment_actions';
import CommentForm from "./comment_form";
import { withRouter } from "react-router-dom";
import { openModal } from '../../action/modal_actions';
import { fetchSong,deleteSong } from "../../action/song_actions";

const mSTP = (state, ownProps) => {

    return {
        currentUser: state.entities.users[state.session.id],
        song: state.entities.songs[ownProps.match.params.id]
    };
};

const mDTP = dispatch => {

    return {
        createComment: comment => dispatch(createComment(comment)),
        openModal: (modal,id )=> dispatch(openModal(modal,id)),
        fetchSong: songId => dispatch(fetchSong(songId)),
        deleteSong: songId => dispatch(deleteSong(songId))
    };
};

export default withRouter(connect(mSTP,mDTP)(CommentForm));