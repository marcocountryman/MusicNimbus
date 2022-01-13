import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faPlay, faPause, faRedoAlt,faStepForward, faStepBackward,faVolumeUp, faVolumeMute} from '@fortawesome/free-solid-svg-icons';
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
class SongPlayer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            duration: 0,
            timeNow: 0,
            onMute: false
        }
        this.playMusic = this.playMusic.bind(this);
        this.pauseMusic = this.pauseMusic.bind(this);
        this.muteMusic = this.muteMusic.bind(this);
        this.setDuration = this.setDuration.bind(this);
        this.calculateTime = this.calculateTime.bind(this);
        this.updateCurrentTime = this.updateCurrentTime.bind(this);
        this.updatePlayer = this.updatePlayer.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.isPlaying) {
            let music = document.getElementById("music-source");
            music.play();
            this.updateCurrentTime()
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

    muteMusic() {
        const music = document.getElementById('music-source');
        if (!music.muted) {
            music.muted = true;
            this.setState({ onMute: true})
        } else {
            music.muted = false;
            this.setState({ onMute: false})
        }
    }

    updateCurrentTime() {
        const music = document.getElementById('music-source');
        const displayTime = document.getElementById('display-time');
        setInterval( () => {
            displayTime.textContent = this.calculateTime(music.currentTime) }, 1000);
    }

    updatePlayer(e) {
        const music = document.getElementById('music-source');
        this.setState({ timeNow: e.target.value })
        const bar = document.getElementById('progression-bar');
        bar.value = music.currentTime;
    }

    render() {
        
        if (!this.props.currentSong) return null;
        
        const audio = document.getElementById('music-source');
        
        let playControl = this.props.isPlaying ? 
        <FontAwesomeIcon icon = {faPause} onClick = {this.pauseMusic}/> :
        <FontAwesomeIcon icon = {faPlay} onClick = {this.playMusic} />
        
        let muteControl = audio && !this.state.onMute ?
        <FontAwesomeIcon icon = {faVolumeMute} onClick = {this.muteMusic}/> :
        <FontAwesomeIcon icon = {faVolumeUp} onClick = {this.muteMusic}/> 

        return (
            <div className='song-player-container'>
                <div className = "song-player-content">

                    <audio
                    id = "music-source"
                    src = {this.props.currentSong.audioSource}
                    onLoadedMetadata={this.setDuration}
                    onTimeUpdate = {this.updatePlayer}
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
                                <p className = "time-now" id = "display-time">
                                </p>

                                <input type="range"
                                onChange = { () => {this.setState({ timeNow: e.target.value },
                                    audio.currentTime = this.state.timeNow
                                    )}}
                                min = "0" 
                                defaultValue={0}
                                className = "song-progress" 
                                id = "progression-bar"
                                step="0.01"
                                />

                                <p className = "duration">
                                    {this.state.duration}
                                </p>
                    </div>

                    <div className = "song-player-right">

                        {muteControl}
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