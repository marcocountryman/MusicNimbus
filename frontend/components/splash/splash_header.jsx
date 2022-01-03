import React from 'react';
import { Link } from 'react-router-dom';

const SplashHeader = () => {

    return (
        <div className = "header-content">
            <div className = "header-logo">
                <h2>Music Nimbus</h2>
            </div>
            <div className = "header-buttons">
                <Link to = "/signup">Create Account</Link>
                <Link to = "/login">Sign In</Link>
            </div>
        </div>
    )
}
export default SplashHeader;