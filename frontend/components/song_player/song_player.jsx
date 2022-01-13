import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faPlay, faPause, faRedoAlt,faStepForward, faStepBackward,faVolumeDown} from '@fortawesome/free-solid-svg-icons';
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
class SongPlayer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            duration: 0,
            currentTime: 0,
            intId: null
        }

        this.playMusic = this.playMusic.bind(this);
        this.pauseMusic = this.pauseMusic.bind(this);
        this.setDuration = this.setDuration.bind(this);
        this.setCurrentTime = this.setCurrentTime.bind(this);
        this.calculateTime = this.calculateTime.bind(this);
        this.updateCurrentTime = this.updateCurrentTime.bind(this);
        this.updatePlayer = this.updatePlayer.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.isPlaying) {
            let music = document.getElementById("music-source");
            music.play();
        } if (this.props.currentSong) {
            if (!this.props.isPlaying) {
            let music = document.getElementById("music-source");
            music.pause();
            }
        }
    }

    calculateTime(secs) {
        const minutes = Math.floor(secs/60);
        const seconds = Math.floor(secs % 60 );
        const newSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
        return `${minutes} : ${newSeconds}`;  
    }

    setDuration() {
        const music = document.getElementById('music-source');
        this.setState({ duration: this.calculateTime(music.duration)})
    }

    setCurrentTime() {
        const music = document.getElementById('music-source');
        this.setState({ currentTime: this.calculateTime(music.currentTime) })
    }

    playMusic() {
        const music = document.getElementById('music-source');
        music.play()
        this.props.playSong();
    }

    pauseMusic() {
        const music = document.getElementById('music-source');
        music.pause()
        this.props.pauseSong();
    }

    componentWillUnmount() {
        if (this.props.userId) {
            this.props.clearSong()
        }
    }

    updateCurrentTime() {
        // const music = document.getElementById('music-source')
        // const intId = setInterval(() => {
        //     this.setState({ currentTime: this.calculateTime(music.currentTime) })
        // }, 1000);
        // setInterval(intId);
        // this.setState({ intId: intId })
    }

    updatePlayer() {
        const music = document.getElementById('music-source');
        const bar = document.getElementById('song-progress');

        bar.value = music.currentTime
    }

    render() {
        
        
        if (!this.props.currentSong) return null;

        let playControl = this.props.isPlaying ? 
        <FontAwesomeIcon icon = {faPause} onClick = {this.pauseMusic}/> :
        <FontAwesomeIcon icon = {faPlay} onClick = {this.playMusic} /> 

        return (
            <div className='song-player-container'>
                <div className = "song-player-content">

                    <audio
                    id = "music-source"
                    src = {this.props.currentSong.audioSource}
                    onLoadedMetadata={this.setDuration}
                    onPlaying={this.setCurrentTime}
                    onTimeUpdate={this.updateCurrentTime}
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
                                <div className = "time-now" onChange = {this.setCurrentTime}>
                                    {this.state.currentTime}
                                </div>

                                <input type="range"
                                onChange = {this.updatePlayer} 
                                max = {this.state.duration}
                                // value = {this.state.currentTime}
                                className = "song-progress" />

                                <div className = "duration">
                                    {this.state.duration}
                                </div>
                    </div>

                    <div className = "song-player-right">

                        <FontAwesomeIcon icon = {faVolumeDown} />

                        <div className = 'song-player-song-info'>
                                <Link to = {`/songs/${this.props.currentSong.id}`}>
                                    <img src={this.props.currentSong.imageUrl} 
                                    alt="player-img"
                                    className = "player-img"
                                    />
                                </Link>
                                    
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