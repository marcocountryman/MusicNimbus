import { connect } from "react-redux";
import UploadForm from "./upload_form";
import { createSong, removeSongErrors } from "../../action/song_actions";

const mSTP = (state) => {

    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.songs
    }
}

const mDTP = (dispatch) => {

    return {
        createSong: song => dispatch(createSong(song)),
        removeSongErrors: () => dispatch(removeSongErrors())
    }
}
export default connect(mSTP, mDTP)(UploadForm);