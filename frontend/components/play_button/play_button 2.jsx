import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';


class PlayButton extends React.Component {

    constructor(props) {
        super(props)
        this.playSong = this.playSong.bind(this);
        this.playMusic = this.playMusic.bind(this);
    }

    playSong(audio) {
    
        audio.play()
    }

    playMusic() {
        const playThis = document.getElementById('music-source');
        // debugger

        if (playThis.paused) {
            playThis.play();
        } else {
            playThis.pause()
        }
    }

    render() {

        if (!this.props.song) {
            return null;
        }
        const audio = this.props.song.audioSource
        return (
            <div className = "play-container" onClick = {this.playMusic}>
                <audio src= {this.props.song.audioSource} id = "music-source"></audio>
                <FontAwesomeIcon icon = {faPlay} className = "play-control" />
            </div>
        )
    }
}

export default PlayButton;