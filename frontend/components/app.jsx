import React from 'react';
import Splash from './splash/splash';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import DiscoverContainer from './discover/discover_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {

    return (
        <div>
            
            <Switch>

                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <ProtectedRoute path="/discover" component={DiscoverContainer} />
                <Route exact path= "/" component={Splash}/>
                
            </Switch> 

        </div>
    )
}
export default App;