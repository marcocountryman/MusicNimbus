import React from 'react';
import Splash from './splash/splash';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';
import Discover from './discover/discover';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modals/modal';
import UserShowContainer from './user/user_container';
import UploadFormContainer from './upload/upload_form_container';
import SongShowContainer from './songs/song_show_container';
import SongPlayerContainer from './song_player/song_player_container';
import NavBarContainer from './navbar/nav_bar_container';


const App = () => {

    return (
        <div className = "app"> 
            <Modal/>

            <ProtectedRoute path = "/" component={SongPlayerContainer} />
            <ProtectedRoute path = "/" component = {NavBarContainer} />
            
            <Switch>
                <AuthRoute exact path= "/" component={Splash}/>
                <ProtectedRoute path="/discover" component={Discover} />
                <ProtectedRoute path="/upload" component={UploadFormContainer} />
                <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
                <ProtectedRoute path="/songs/:id" component={SongShowContainer} />
            </Switch> 

        </div>
    )
}
export default App;