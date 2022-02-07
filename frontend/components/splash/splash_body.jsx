import React from 'react';
import { Link } from "react-router-dom";
import { shuffle } from '../../util/misc_util';

class SplashBody extends React.Component {
    
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllSongs();
    }

    render () {

        if (!this.props.songs) return null;
    
        shuffle(this.props.songs);
        const songItems = this.props.songs.slice(0,12);
        const renderSongs = songItems.map((song, idx) => {
            return (
                <li key = {`song-${idx}`}className="song-item"  >
                    <img src= {song.imageUrl} alt="song" />
               
                    <label className = "song-title">{song.title}</label>
                    <label className = "artist-name">{song.artist}</label>
                </li >
            )
        })

        return (
            <div className = "splash-body" >
                <div className = "splash-box-1">
                    <button className = "upload-btn" onClick = {() => this.props.openModal('login')}>Upload your own</button>
                    <h2 className = "splash-message-1">Hear what's trending for free in the Music Nimbus community</h2>
                </div>
                <div className = "splash-box-2">
                        <ul className = "song-lists">
                            {renderSongs}
                        </ul>
                </div>
                <div className = "splash-box-3">
                    <img src={window.mobilephoto} alt="mobilephoto" className="left-content"/>
                    <div className="right-content-container">
                        <div className='right-content-items'>
                            <h2 className = "right-content-message">Never Stop Listening</h2>
                            <div className='right-content-color-effect'></div>
                            <p className='right-content-info'>Music Nimbus is available on Web for best experience.</p>                 
                            <div className='right-content-buttons'>
                                <button className = "githubbutn"><a href= "https://github.com/marcocountryman" className = "link" target = "_blank">Github</a></button>
                                <button className='linkedinbutn'><a href= "https://www.linkedin.com/" className = "link" target = "_blank">LinkedIn</a></button>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className='splash-box-4'>
                    
                        <div className='content-left-container'>
                            <h2 className = "shoutout1">Calling all employers</h2>
                            <p className = "shoutout2">I am available for immediate hire</p>
                            <button className = "findout">Find out more</button>
                        </div>
                
                    <div className = "content-right-container">
                        <img src={window.createphoto} alt="createphoto" className = "content-right-photo"/>
                        <h2 className = "content-right-message">I ❤️ Music Nimbus</h2>
                    </div>
                </div>
                <div className = "splash-box-5">
                    <div className = "create-message-1">Thanks for listening. Now join in.</div>
                    <div className = "create-message-2">Save tracks, follow users, build playlists. All for free.</div>
                    <div className = "create-button-container"><button className = "create-button" onClick = {() => this.props.openModal('signup')}>Create Account</button></div>
                    <div className = "create-message-container">
                        <p className = "create-signin-message">Already have an account?</p>
                        <button className = "create-signin-butn" onClick = {() => this.props.openModal('login')}>Sign In</button>
                    </div>
                </div>

                <div className='splash-footer'>
                    <ul className = "footer-items">
                        <li className = "footer-list-item"><a href= "https://github.com/marcocountryman" className = "link-footer" target = "_blank">Github</a></li>
                        <li className = "footer-list-item"><a href= "https://www.linkedin.com/" className = "link-footer" target = "_blank">LinkedIn</a></li>
                        <li className = "footer-list-item"><Link to = "/" className = "link-footer">Sources</Link></li>
                        <li className = "footer-list-item">React</li>
                        <li className = "footer-list-item">Redux</li>
                        <li className = "footer-list-item">Rails</li>
                        <li className = "footer-list-item">Ruby</li>
                        <li className = "footer-list-item">JavaScript</li>
                        <li className = "footer-list-item">AWS</li>
                    </ul>
                    <span className = "language">Language: English (UK)</span>
                </div>
            </div>
        )
    }
}

export default SplashBody;