import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faPlay, faPause, faRedoAlt,faStepForward, faStepBackward,faVolumeDown} from '@fortawesome/free-solid-svg-icons';
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
class SongPlayer extends React.Component {

    constructor(props) {
        super(props)

        this.playMusic = this.playMusic.bind(this);
        this.pauseMusic = this.pauseMusic.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props && this.props.isPlaying) {
            let music = document.getElementById("music-source");
            music.play();
        } 
        if (!this.props.isPlaying) {
            let music = document.getElementById("music-source");
            music.pause();
        }
    }

    playMusic() {
        // debugger
        const music = document.getElementById('music-source');
        music.play()
        this.props.playSong();
    }

    pauseMusic() {
        // debugger
        const music = document.getElementById('music-source');
        music.pause()
        this.props.pauseSong();
    }

    // playMusic() {
       
    //     setTimeout(() => {
    //     const playThis = document.getElementById('music-source');
    //         playThis.play()
    //     }, 100);
    // }

    render() {
        const playThis = document.getElementById('music-source');
        
        if (!this.props.currentSong) return null;

        let playControl = this.props.isPlaying ? 
        <FontAwesomeIcon icon = {faPause} onClick = {this.pauseMusic}/> :
        <FontAwesomeIcon icon = {faPlay} onClick = {this.playMusic} /> 
        // debugger
        // if (this.props.currentSong.audioSource ) {
        //     this.playMusic()
        // }
        return (
            <div className='song-player-container'>
                <div className = "song-player-content">

                    <audio
                    id = "music-source"
                    src = {this.props.currentSong.audioSource}
                    />
                    
                    <div className = "song-player-left">

                        <button>
                            <FontAwesomeIcon icon = {faStepBackward} />
                        </button>

                        <button>
                            {playControl}
                        </button>

                        <button>
                            <FontAwesomeIcon icon = {faStepForward} />
                        </button>
                        
                        <a href="https://soundcloud.com/discover">
                            <FontAwesomeIcon icon = {faMusic} />
                        </a>

                        <button>
                            <FontAwesomeIcon icon = {faRedoAlt} />
                        </button>
                    </div>
                    
                    <div className = "song-player-middle">
                            <input type="range" min= "0" max = {this.props.currentSong.duration} className = "song-progress" />
                    </div>

                    <div className = "song-player-right">

                        <FontAwesomeIcon icon = {faVolumeDown} />

                        <div className = 'song-player-song-info'>
                                <img src={this.props.currentSong.imageUrl} 
                                alt="player-img"
                                className = "player-img"
                                 />
                                <div className = "song-player-artist-info">
                                    <span className = "player-song">{this.props.currentSong.title}</span>
                                    <span className = "player-artist">{this.props.currentSong.artist}</span>
                                </div>
                        </div>

                        <div className = "song-player-links">
                                <a href="https://github.com/marcocountryman" target = "_blank">
                                    <FaGithubAlt/>
                                </a>
                                <a href="https://www.linkedin.com/" target= "_blank">
                                    <FaLinkedinIn/>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SongPlayer;