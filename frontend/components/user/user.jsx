import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container';
import SongPlayerContainer from '../song_player/song_player_container';

class UserShow extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <NavBarContainer/>
                {/* <SongPlayerContainer/> */}
            </div>
        )
    }
}
export default UserShow;