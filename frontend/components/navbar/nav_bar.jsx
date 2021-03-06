import React from 'react';
import { Link } from 'react-router-dom'
import { FaUserNinja } from 'react-icons/fa';
import SearchBarContainer from '../search/search_container';

class NavBar extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className = "navbar-main">
                <div className = "navbar-container">
                    <div className = "left-nav">
                        <div className = "left-nav-content">
                            <div className = "nav-logo">
                                <span>☁️</span>
                                <Link to = "/discover" className = "header-logo-text">Music Nimbus</Link>
                            </div>
                            <Link to = "/discover" className = "header-home">
                                <span>Home</span>
                            </Link>
                        </div>
                    </div>

                    <div className = "nav-search-container">
                        <SearchBarContainer/>
                    </div>
                    <div className = "right-nav">
                        <Link to = "/upload" className = "nav-upload">Upload</Link>
                        <div className = "nav-user-info">
                            <FaUserNinja/>
                            <Link to = {`/users/${this.props.currentUser.id}`}className = "nav-displayname">
                                {this.props.currentUser.displayname}
                            </Link>
                        </div>
                        <div className = "nav-signout">
                            <span onClick = {this.props.logout}>Sign Out</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default NavBar;