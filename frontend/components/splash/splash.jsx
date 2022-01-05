import React from 'react';
import SplashHeaderContainer from './splash_header_container';
import SplashBody from './splash_body';
import SplashFooter from './splash_footer';

class Splash extends React.Component {

    render() {
        return (
            <div className = "splash-content">
              <SplashHeaderContainer/>
              <SplashBody/>
              <SplashFooter/>
            </div>
        )
    }
}
export default Splash;