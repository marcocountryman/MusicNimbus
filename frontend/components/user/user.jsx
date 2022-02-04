import React from 'react';

class UserShow extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
        this.props.fetchAllSongs();
    }

    render() {

        if (!this.props.user) return null;

        return (
            <div className = "user-content-container">
                <div className = "user-top">

                    <div className= 'user-top-left-container'>

                        <div className = "user-top-left">
                            <img src= {this.props.user.defaultPhoto} alt= "default-pic" className='user-pic'/>
                            <span className = "profile-username">{this.props.user.displayname}</span>
                        </div>

                    </div>

                </div>

                <div className = "user-bottom">
                    SONGS
                </div>
            </div>
        )
    }
}
export default UserShow;