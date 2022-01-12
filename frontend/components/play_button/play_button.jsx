import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const PlayButton = (props) => {
    const nowPlaying = document.getElementById('music-source');

    let playControl = null;
    
    if (!props.currentSong) {
        playControl =   <div className = "play-container" 
        onClick = {() => {props.receivePlaySong(props.song)}}>
                            <FontAwesomeIcon icon = {faPlay} className = "play-control" />
                        </div>
    } else if (props.currentSong) {
         playControl =   <div className = "play-container" onClick = {() => props.pauseSong()}>
                            <FontAwesomeIcon icon = {faPause} className = "play-control" />
                        </div>
    } 

    if (props.currentSong && props.currentSong.id !== props.song.id) {
        playControl =   <div className = "play-container" 
        onClick = {() => {props.receivePlaySong(props.song)}}>
                            <FontAwesomeIcon icon = {faPlay} className = "play-control" />
                        </div>
    } else if ( props.currentSong && props.currentSong.id === props.song.id && !props.isPlaying) {
        playControl = <div className = "play-container" onClick = {() => props.playSong()}>
                            <FontAwesomeIcon icon = {faPlay} className = "play-control" />
                    </div>
    } 

        return (
            
            <div>
                {playControl}
            </div>
        )
    
}

export default PlayButton;