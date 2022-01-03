import React from 'react';
import { Link } from 'react-router-dom';
import SplashHeader from './splash_header';

class Splash extends React.Component {

    render() {
        return (
            <div className = "splash">
              <SplashHeader/>
            </div>
        )
    }
}
export default Splash;