import React from 'react';
import PlayButtonContainer from '../play_button/play_button_container';
import { Link } from 'react-router-dom';
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { FaTrash } from 'react-icons/fa';
import UserCommentsContainer from './user_comments';

class UserShow extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
        this.props.fetchAllSongs();
        this.props.fetchAllComments();
    }

    render() {
        if (!this.props.user) return null;

        const currentUserId = this.props.currentUserId;
        const userSongs = this.props.songs.filter(song => song.uploader_id === this.props.user.id)
       
        const songItems = userSongs.length > 0 ? userSongs.map((song,idx) => {
            let num = idx + 1;
            let deleteButton = song.uploader_id === currentUserId ? 
            <FaTrash className = "delete-song" onClick = {() => this.props.deleteSong(song.id)}/> : null;
           
            return (
                <li className = "user-song-list-item" key = {`song-${idx}`}>
                    
                    <div className = "user-song-list-item-container">
                        <img src= {song.imageUrl} alt="song-photo" className = "song-list-image"/>
                        <Link to = {`/songs/${song.id}`}>
                            <div className = "song-list-item-info">
                                <span className = "song-number">{num}</span>
                                <span className = "song-list-artist">{song.artist}</span>
                                <span>-</span>
                                <span className = "song-list-title">{song.title}</span>
                            </div>
                        </Link>

                      
                    </div>
                   
                   

                    <div className = "user-show-play-button">
                        <PlayButtonContainer song = {song}/>
                    </div>

                    {deleteButton}
                </li>
            )
        }) : <button 
        onClick = {() => this.props.history.push('/upload')}
        className = "first-upload"
        >
        Upload Your First Song!
        </button>

      
        
        return (
            <div className = "user-content-container">
                <div className = "user-top">

                    <div className= 'user-top-left-container'>

                        <div className = "user-top-left">
                            <img src= {this.props.user.defaultPhoto} alt= "default-pic" className='user-pic'/>
                            
                            <div className = "profile-username-container">
                                <span className = "profile-username">{this.props.user.displayname}</span>
                            </div>
                        </div>

                    </div>

                </div>

                <div className = "user-bottom">
                    <div className = "user-song-top">
                            <span className = "uploaded-songs">Uploaded Songs</span>
                    </div>

                    <div className = "user-songs">
                        <ul className = "user-song-list">
                            {songItems}
                        </ul>

                        <div className = "user-right-content">
                            
                            <div className = "num-songs-uploaded">
                                <span className = "uploaded-song-label">Songs</span>
                                <span className = "uploaded-song-num">{userSongs.length}</span>
                            </div>

                            {/* <span className = "user-comment-label">{this.props.user.displayname}'s Recent Comments</span> */}
                            {/* <ul className = "user-comment-list">
                                {commentItems}
                            </ul> */}
                            <UserCommentsContainer/>
                            <span className = "nimbus-creator">Meet the Creator</span>
                            <div className = "sidebar-container">
                                <div className = "sidebar-links">
                                    <a href="https://github.com/marcocountryman" className = "link" target = "_blank"><button className = "outside-link"><FaGithubAlt/></button></a>
                                    <a href="https://www.linkedin.com/in/marco-countryman-40492922a/" className = "link" target = "_blank"><button className = "outside-link"><FaLinkedinIn/></button></a>
                                </div>

                                <div className = "tech-used">
                                    <ul className = "tech-used-list">
                                        <li className = "tech-used-item">React</li>
                                        <li className = "tech-used-item">Redux</li>
                                        <li className = "tech-used-item">JavaScript</li>
                                        <li className = "tech-used-item">Ruby</li>
                                        <li className = "tech-used-item">Rails</li>
                                        <li className = "tech-used-item">AWS</li>
                                        <li className = "tech-used-item">CSS</li>
                                        <li className = "tech-used-item">HTML</li>
                                    </ul>
                                    <p className = "sidebar-language">Language: English(UK)</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default UserShow;