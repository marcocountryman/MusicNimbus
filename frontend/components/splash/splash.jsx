import React from 'react';
import SplashHeaderContainer from './splash_header_container';
import SplashBody from './splash_body';

class Splash extends React.Component {

    render() {
        return (
            <div className = "splash-content">
              <SplashHeaderContainer/>
              <SplashBody/>
            </div>
        )
    }
}
export default Splash;