import { fetchAllSongs } from "../../action/song_actions";
import { connect } from "react-redux";
import DiscoverBody from "./discover_body";

const mSTP = (state) => {

    return {
        currentUser: state.entities.users[state.session.id],
        songs: Object.values(state.entities.songs)
    };
};

const mDTP = (dispatch) => {

    return {
        fetchAllSongs: () => dispatch(fetchAllSongs())
    };
};

export default connect(mSTP, mDTP)(DiscoverBody);