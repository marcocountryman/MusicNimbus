import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faPlay, faPause, faRedoAlt,faStepForward, faStepBackward, faVolume, faVolumeDown, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
class SongPlayer extends React.Component {

    render() {
        
        return (
            <div className='song-player-container'>
                <div className = "song-player-content">

                
                    <div className = "song-player-left">

                        <button>
                            <FontAwesomeIcon icon = {faStepBackward} />
                        </button>

                        <button>
                            <FontAwesomeIcon icon = {faPlay} />
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
                            [Middle Content]
                    </div>

                    <div className = "song-player-right">

                        <FontAwesomeIcon icon = {faVolumeDown} />

                        <div className = 'song-player-song-info'>
                                <img src="https://music-nimbus-seeds.s3.amazonaws.com/hiphop-artist.jpg" 
                                alt="player-img"
                                className = "player-img"
                                 />
                                <div className = "song-player-artist-info">
                                    <span className = "player-song">Song Name</span>
                                    <span className = "player-artist">Artist Name</span>
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
                {/* <FontAwesomeIcon icon = {faVolumeDown}" /> */}
                {/* <FontAwesomeIcon icon = {faVolumeUp}" /> */}
            </div>
        )
    }
}

export default SongPlayer;