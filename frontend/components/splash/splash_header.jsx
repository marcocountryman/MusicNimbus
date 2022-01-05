import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../action/modal_actions';

const SplashHeader = (props) => {

    return (
        <div className = "header-content">
            <div className = "header-logo">
                <span>☁️</span>
                <Link to = "/" className = "header-logo-text">Music Nimbus</Link>
            </div>
            <div className = "header-buttons">
                <button  className = "login-btn" onClick = {() => openModal('login')}>Sign In</button>
                <button className = "signup-btn" onClick = {() => openModal('signup')}>Create Account</button>
            </div>
        </div>
    )
}
export default SplashHeader;