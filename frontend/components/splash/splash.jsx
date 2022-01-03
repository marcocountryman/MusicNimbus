import React from 'react';
import SplashHeader from './splash_header';
import SplashBody from './splash_body';

class Splash extends React.Component {

    render() {
        return (
            <div className = "splash-content">
              <SplashHeader/>
              <SplashBody/>
            </div>
        )
    }
}
export default Splash;