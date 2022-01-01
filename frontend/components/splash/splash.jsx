import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

    render() {
        
        return (

            this.props.currentUser ? 
            <div>
                <h2>Welcome, {this.props.currentUser.displayname}! </h2>
                <button onClick = {() => this.props.logout()}>Log Out</button>
            </div>
            :
            <div>
                <Link to = "/signup">Sign Up</Link>
                <br/>
                <Link to = "/login">Log In</Link>
            </div>
        )
    }
}
export default Splash;