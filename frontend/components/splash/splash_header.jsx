import React from 'react';
import { Link } from 'react-router-dom';

const SplashHeader = (props) => {

    return (
        <div className = "header-content">
            <div className = "header-logo">
                <span>☁️</span>
                <Link to = "/" className = "header-logo-text">Music Nimbus</Link>
            </div>
            <div className = "header-buttons">
                <button  className = "login-btn" onClick = {() => props.openLogin}>Sign In</button>
                <button className = "signup-btn" onClick = {() => props.openSignup}>Create Account</button>
            </div>
        </div>
    )
}
export default SplashHeader;