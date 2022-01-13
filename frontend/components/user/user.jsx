import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container';
import SongPlayerContainer from '../song_player/song_player_container';

class UserShow extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
        // debugger
    }

    render() {

        return (
            <div>
                {/* <NavBarContainer/> */}

                <div>
                    HELLO FROM USER 1
                </div>
                {/* <SongPlayerContainer/> */}
            </div>
        )
    }
}
export default UserShow;