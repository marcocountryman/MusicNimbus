import React from 'react';
import Splash from './splash/splash';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';
import Discover from './discover/discover';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modals/modal';
import UserShowContainer from './user/user_container';
import UploadFormContainer from './upload/upload_form_container';
import SongShowContainer from './songs/song_show_container';

//PENDING DELETION
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => {

    return (
        <div className = "app">
            <Modal/>
            <Switch>

                {/* <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} /> */}
                <AuthRoute exact path= "/" component={Splash}/>
                <ProtectedRoute path="/discover" component={Discover} />
                <ProtectedRoute path="/upload" component={UploadFormContainer} />
                <ProtectedRoute path="/users/:id" component={UserShowContainer} />
                <ProtectedRoute path="/songs/:id" component={SongShowContainer} />
                
            </Switch> 

        </div>
    )
}
export default App;