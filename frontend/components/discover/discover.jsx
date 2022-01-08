import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container';
import DiscoverBodyContainer from './discover_body_container';
// NOTE:
// NOT THE FINISHED PRODUCT, USERS WILL BE REDIRECTED HERE UPON LOG IN.

class Discover extends React.Component {

    render() {
        return(
            <div>
                <NavBarContainer/>
                <DiscoverBodyContainer/>
            </div>
        )
    }
}
export default Discover;