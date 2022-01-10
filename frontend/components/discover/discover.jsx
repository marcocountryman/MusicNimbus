import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container';
import DiscoverBodyContainer from './discover_body_container';
import SongPlayerContainer from '../song_player/song_player_container';

const Discover = () => {

    return (
         <div className = "discover-container">
                <NavBarContainer/>
                <DiscoverBodyContainer/>
                <SongPlayerContainer/>
        </div>
    )
}

export default Discover;