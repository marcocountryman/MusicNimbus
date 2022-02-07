import { connect } from 'react-redux';
import UpdateForm from './update_form';
import { closeModal } from '../../action/modal_actions';
import { updateSong, fetchSong, removeSongErrors } from '../../action/song_actions';
import { withRouter } from 'react-router-dom'

const mSTP = (state, ownProps) => {

    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.songs,
        modalId: state.ui.modalId,
        song: state.entities.songs[state.ui.modalId]
    }
};

const mDTP = (dispatch) => {

    return {
        fetchSong: songId => dispatch(fetchSong(songId)),
        updateSong: song => dispatch(updateSong(song)),
        closeModal: () => (dispatch(closeModal())),
        removeSongErrors: () => dispatch(removeSongErrors())
    };
};

export default withRouter(connect(mSTP,mDTP)(UpdateForm));