import React from 'react'
import { Link } from 'react-router-dom';
import PlayButtonContainer from '../play_button/play_button_container';
import CommentFormContainer from '../comments/comment_form_container';
import CommentThreadContainer from '../comments/comment_thread_container';
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

class SongShow extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
       this.props.fetchSong(this.props.match.params.id);
       this.props.fetchAllSongs();
       this.props.fetchAllComments();
    }

    render() {

        if (!this.props.song) return null;

        const relatedGenre = this.props.songs.filter(song => song.genre === this.props.song.genre && song.id !== this.props.song.id);
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
                <div className ='show-page-container'>
                        
                        <div className = 'show-page-content'>
                                <div className = "show-page-banner">
                                        <div className = 'show-banner-left'>
                                                <div className = 'show-left-content'>
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
                                                
                                                <CommentFormContainer/>
                                                <CommentThreadContainer song = {this.props.song}/>
                                                   
                                            </div>
                                    </div>

                                    <div className = 'show-page-right'>
                                            
                                            <div className = "show-label">
                                                <p className = "related-label">Related Songs</p>
                                            </div>
                                            <ul className = 'related-genre-list'>
                                                {renderGenreItems}
                                            </ul>
                                            <span className='nimbus-creator-discover'>Meet the Creator </span>
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

export default SongShow;