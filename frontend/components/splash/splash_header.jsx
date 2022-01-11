import React from 'react';
import { Link } from 'react-router-dom';
// import { openModal } from '../../action/modal_actions';

const SplashHeader = (props) => {

    return (
        <div className = "header-content">
            <div className = "header-content-top">
                <div className = "header-logo">
                    <span className = "cloud">☁️</span>
                    <Link to = "/" className = "header-logo-text">Music Nimbus</Link>
                </div>
                
                <div className = "header-buttons">
                    <button  className = "login-btn" onClick = {() => props.openModal('login')}>Sign In</button>
                    <button className = "signup-btn" onClick = {() => props.openModal('signup')}>Create Account</button>
                </div>
            </div>
            
            <h3 className = "splash-logo">Discover your sound</h3>
        </div>
    )
}
export default SplashHeader;