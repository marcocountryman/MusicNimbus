import { connect } from 'react-redux';
import UpdateForm from './update_form';
import { closeModal } from '../../action/modal_actions';
import { updateSong, fetchSong, removeSongErrors } from '../../action/song_actions';

const mSTP = (state, ownProps) => {

    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.song
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

export default connect(mSTP,mDTP)(UpdateForm);