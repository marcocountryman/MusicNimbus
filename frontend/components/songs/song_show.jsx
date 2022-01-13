import React from 'react'
import NavBarContainer from '../navbar/nav_bar_container';
import { Link } from 'react-router-dom';
import { shuffle } from '../../util/misc_util';
import SongPlayerContainer from '../song_player/song_player_container';
import PlayButtonContainer from '../play_button/play_button_container';

class SongShow extends React.Component {

    constructor(props) {
        super(props)

        // this.sendToUser = this.sendToUser.bind(this);
    }

    componentDidMount() {
       this.props.fetchSong(this.props.match.params.id);
       this.props.fetchAllSongs();
    //    debugger
    }

    // sendToUser() {
    //     this.props.history.push(`/users/${this.props.song.uploader.id}`)
    // }

    render() {

        if (!this.props.song) return null;

        const relatedGenre = this.props.songs.filter(song => song.genre === this.props.song.genre && song.id !== this.props.song.id);
        shuffle(relatedGenre)
        const genreItems = relatedGenre.slice(0,3);
        const renderGenreItems = genreItems.map( (song, idx) => {
           return ( 
                <li className = 'related-genre-item' key = {`song-${idx}`}>
                    
                    <Link to = {`/songs/${song.id}`}>
                        <img src= {song.imageUrl} alt= "song-image" className = 'related-image'/>
                    </Link>

                    <div className = 'genre-song-info'>
                        <p className = 'related-title'>{song.title}</p>
                        <p className = 'related-artist'>{song.artist}</p>
                    </div>
                </li>
            )
        })

        return (
            <div>
                {/* <NavBarContainer/> */}

                <div className ='show-page-container'>
                        
                        <div className = 'show-page-content'>
                                <div className = "show-page-banner">
                                        <div className = 'show-banner-left'>
                                                <div className = 'show-left-content'>
                                                        {/* <p className = "play-button">▶️</p> */}
                                                        <div className = "left-info-container">
                                                            <PlayButtonContainer song = {this.props.song} />
                                                            <div className = 'song-info'>
                                                                <button className = 'play-top'>{this.props.song.title}</button>
                                                                <button className = 'play-bottom'>{this.props.song.artist}</button>
                                                            </div>
                                                        </div>
                                                </div>
                                                <div className = 'show-right-content'>
                                                    <button className= 'banner-genre-label'> {`# ${this.props.song.genre}`}</button>
                                                </div>
                                        </div>

                                        <div className = 'show-banner-right'>
                                                <img src = {this.props.song.imageUrl}  
                                                alt="song-image" 
                                                className='show-banner-image'
                                                />
                                        </div>
                                </div>

                                <div className = 'show-page-bottom'>
                                    <div className = 'show-page-left'>
                                            <div className = "show-page-comment-container">
                                                    <div className = "user-info-show">
                                                        <Link to = {`/users/${this.props.song.uploader_id}`}>
                                                            <img src = {this.props.song.profilePic}  alt="profile-pic" className='song-profile-pic'/>
                                                        </Link>
                                                            <span className = "user-name-show">{this.props.song.uploader.displayname}</span>
                                                    </div>
                                                
                                                            
                                                   <div className =  "placeholder">
                                                        <img src="https://music-nimbus-seeds.s3.amazonaws.com/comment_holder.jpg" alt="construction" className = "placeholder-pic"/>
                                                        <h3 className = "placeholder-message">Seems a little quite over here.</h3>
                                                   
                                                   </div>
                                                    
                                                    
                                                    
                                            </div>
                                    </div>

                                    <div className = 'show-page-right'>
                                            
                                            <div className = "show-label">
                                                <p className = "related-label">Related Songs</p>
                                            </div>
                                            <ul className = 'related-genre-list'>
                                                {renderGenreItems}
                                            </ul>

                                            <div className = "sidebar-links">
                                                <button className = "outside-link"><a href="https://github.com/marcocountryman" className = "link">GitHub</a></button>
                                                <button className = "outside-link"><a href="https://www.linkedin.com/" className = "link">LinkedIn</a></button>
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
                {/* <SongPlayerContainer/> */}
            </div>

        )
    }
}

export default SongShow;