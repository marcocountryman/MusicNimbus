import React from 'react';
import { Link } from 'react-router-dom';
import PlayButtonContainer from '../play_button/play_button_container';

class DiscoverBody extends React.Component {
    
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllSongs();
    }

    render() {    
        const trapItems = this.props.songs.filter(song => song.genre === "Trap");
        const renderTrap = trapItems.map((song, idx)=> {
            return (
                <li className = "song-container" key = {`song-${idx}`}>
                    
                    <img src={song.imageUrl} alt="trapsong" className= "discover-images"/>
                    <Link to = {`/songs/${song.id}`} className = "genre-link">
                        <span className = "song-title">{song.title}</span>
                    </Link>
                    <span className = "artist-name">{song.artist}</span>
                    <div className = "play-button-container">
                        <PlayButtonContainer song = {song} />
                    </div>
                </li>
            )
        })

        const hipHopItems = this.props.songs.filter(song => song.genre === "Hip Hop");
        const renderHipHop = hipHopItems.map((song,idx) => {
            return (
                <li className = "song-container" key = {`song-${idx}`}>
                    <img src={song.imageUrl} alt="hiphopsong" className= "discover-images"/>
                    <Link to = {`/songs/${song.id}`} className = "genre-link">
                        <span className = "song-title">{song.title}</span>
                    </Link>
                    <span className = "artist-name">{song.artist}</span>
                    <div className = "play-button-container">
                        <PlayButtonContainer song = {song} />
                    </div>
                </li>
            )
        })

        const studyItems = this.props.songs.filter(song => song.genre === "Study");
        const renderStudy = studyItems.map((song,idx) => {
            return (
                <li className = "song-container" key = {`song-${idx}`}>
                    <img src={song.imageUrl} alt="studysong" className= "discover-images"/>
                    <Link to = {`/songs/${song.id}`} className = "genre-link">
                        <span className = "song-title">{song.title}</span>
                    </Link>
                    <span className = "artist-name">{song.artist}</span>
                    <div className = "play-button-container">
                        <PlayButtonContainer song = {song} />
                    </div>
                </li>
            )
        })

        const jazzItems = this.props.songs.filter(song => song.genre === "Jazz");
        const renderJazz = jazzItems.map((song, idx)=> {
            return (
                <li className = "song-container" key = {`song-${idx}`}>
                    <img src={song.imageUrl} alt="jazzsong" className= "discover-images"/>
                    <Link to = {`/songs/${song.id}`} className = "genre-link">
                        <span className = "song-title">{song.title}</span>
                    </Link>
                    <span className = "artist-name">{song.artist}</span>
                    <div className = "play-button-container">
                        <PlayButtonContainer song = {song} />
                    </div>
                </li>
            )
        })

        const classicalItems = this.props.songs.filter(song => song.genre === "Classical");
        const renderClassical = classicalItems.map((song, idx) => {
            return (
                <li className = "song-container" key = {`song-${idx}`}>
                    <img src={song.imageUrl} alt="classicalsong" className= "discover-images"/>
                    <Link to = {`/songs/${song.id}`} className = "genre-link">
                        <span className = "song-title">{song.title}</span>
                    </Link>
                    <span className = "artist-name">{song.artist}</span>
                    <div className = "play-button-container">
                        <PlayButtonContainer song = {song} />
                    </div>
                </li>
            )
        })

        return ( 
        <div className = "discover-content-container">
            <div className = "discover-content">
                <div className = "discover-songs">

                    <div className = 'genre-container'>
                        <div className = "genre-label">
                            <h2 className = "genre-header">Hip Hop</h2>
                            <p className = "genre-desc">Bump your head to this</p>
                        </div>
                        <ul className = "genre-content">
                            {renderHipHop}
                        </ul>  
                    </div>

                    <div className = 'genre-container'>
                        <div className = "genre-label">
                            <h2 className = "genre-header">Trap</h2>
                            <p className = "genre-desc">Get down and dirty</p>
                        </div>
                        <ul className = "genre-content">
                            {renderTrap}
                        </ul>

                    </div>

                    <div className = 'genre-container'>
                        <div className = "genre-label">
                            <h2 className = "genre-header">Study</h2>
                            <p className = "genre-desc">Woosah, study and calm</p>
                        </div>
                        <ul className = "genre-content">
                            {renderStudy}
                        </ul>
                    </div>

                    <div className = 'genre-container'>
                        <div className = "genre-label">
                            <h2 className = "genre-header">Jazz</h2>
                            <p className = "genre-desc">Swing along to this</p>
                        </div>
                        <ul className = "genre-content">
                            {renderJazz}
                        </ul>
                    </div>

                    <div className = 'genre-container'>
                        <div className = "genre-label">
                            <h2 className = "genre-header">Classical</h2>
                            <p className = "genre-desc">You're gonna need a cup of tea</p>
                        </div>
                        <ul className = "genre-content">
                            {renderClassical}
                        </ul>
                    </div>
                </div>
                <div className = "discover-sidebar">
                    
                    <div className = "discover-sidebar-container">
                        
                        <div className = "sidebar-header">
                            <span className = "sidebar-message">#1 Song on Music Nimbus</span>
                        </div>
                        
                        <div className = "sidebar-song">
                            
                            <Link to = '/songs/12'>
                                <img src= "https://music-nimbus-seeds.s3.amazonaws.com/hiphop-artist.jpg" 
                                alt="number-one" 
                                className = "numberone-artist"
                                />
                            </Link>
                            
                            <div>
                                <p className = "song-title">MO BABY</p>
                                <p className = "artist-name">ETRNLPRODUCER</p>
                            </div>
                        
                        </div>

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
        )
    }
}

export default DiscoverBody;