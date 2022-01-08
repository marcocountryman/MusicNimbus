import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container';
import DiscoverBodyContainer from './discover_body_container';

const Discover = () => {

    return (
         <div className = "discover-container">
                <NavBarContainer/>
                <DiscoverBodyContainer/>
        </div>
    )
}

export default Discover;