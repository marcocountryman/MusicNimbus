import React from 'react';
import { Link } from 'react-router-dom';

const SplashHeader = () => {

    return (
        <div className = "header-content">
            <div className = "header-logo">
                <span>☁️</span>
                <Link to = "/" className = "header-logo-text">Music Nimbus</Link>
            </div>
            <div className = "header-buttons">
                <Link to = "/login" ><button  className = "login-btn">Sign In</button></Link>
                <Link to = "/signup" ><button className = "signup-btn">Create Account</button></Link>
            </div>
        </div>
    )
}
export default SplashHeader;