import React from 'react';
import SplashHeaderContainer from './splash_header_container';
import SplashBodyContainer from './splash_body_container';

class Splash extends React.Component {

    render() {
        return (
            <div className = "splash-content">
              <SplashHeaderContainer/>
              <SplashBodyContainer/>
            </div>
        )
    }
}
export default Splash;