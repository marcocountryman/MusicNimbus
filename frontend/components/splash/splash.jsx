import React from 'react';
import SplashHeader from './splash_header';
import SplashBody from './splash_body';
import SplashFooter from './splash_footer';

class Splash extends React.Component {

    render() {
        return (
            <div className = "splash-content">
              <SplashHeader/>
              <SplashBody/>
              <SplashFooter/>
            </div>
        )
    }
}
export default Splash;