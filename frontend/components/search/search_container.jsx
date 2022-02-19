import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchBar from './search';

const mSTP = (state) => {

    return {
        songs: Object.values(state.entities.songs)
    }
}

// const mDTP = (dispatch) => {

//     return {

//     }
// }

export default withRouter(connect(mSTP,null)(SearchBar))