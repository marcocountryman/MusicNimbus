import React from 'react';

// NOTE:
// NOT THE FINISHED PRODUCT, USERS WILL BE REDIRECTED HERE UPON LOG IN.

class Discover extends React.Component {

    render() {
        return(
            <div>
                <h2>Welcome, {this.props.currentUser.displayname}! </h2>
                <br/>
                <h2>List of songs will be here eventually, I promise</h2>
                <button onClick = {() => this.props.logout()}>Log Out</button>
            </div>
        )
    }
}
export default Discover;