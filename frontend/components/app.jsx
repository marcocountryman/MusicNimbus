import React from 'react';
import SplashContainer from './splash/splash_container';
import { Route, Routes } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => {

    return (
        <div>
            <h2>Music Nimbus</h2>
            <SplashContainer/>
            
            <Routes>
                <Route path="/login" component={LoginFormContainer} />
                <Route path="/signup" component={SignupFormContainer} />
            </Routes>

        </div>
    )
}
export default App;