import React from 'react';

const SplashBody = () => {
    return (
        <div className = "splash-body" >
            <div className = "splash-box-1">
                <button className = "upload-btn">Upload your own</button>
                <h2 className = "splash-message-1">Hear what's trending for free in the Music Nimbus community</h2>
            </div>
            <div className = "splash-box-2">
                    <ul className = "song-lists">
                        <li className="song-item">
                            <img src= {window.bobmarley} alt="bobmarley" />
                            <label className = "song-title">Waiting In Vain</label>
                            <label className = "artist-name">Bob Marley</label>
                        </li >
                        <li className="song-item">
                            <img src= {window.fiftycent} alt="fiftycent" />
                            <label className = "song-title">In Da Club</label>
                            <label className = "artist-name">50 Cent</label>
                        </li>
                        <li className="song-item">
                            <img src= {window.backstreetboys} alt="backstreetboys" />
                            <label className = "song-title">As Long As You Love Me</label>
                            <label className = "artist-name">Back Street Boys</label>
                        </li>
                        <li className="song-item">
                            <img src= {window.blink} alt="blink" />
                            <label className = "song-title">What's My Age Again</label>
                            <label className = "artist-name">Blink 182</label>
                        </li>
                        <li className="song-item">
                            <img src= {window.brunomars} alt="brunomars" />
                            <label className = "song-title">Runaway Baby</label>
                            <label className = "artist-name">Bruno Mars</label>
                        </li>
                        <li className="song-item">
                            <img src= {window.destinyschild} alt="destinyschild" />
                            <label className = "song-title">Jumpin, Jumpin</label>
                            <label className = "artist-name">Destiny's Child</label>
                        </li>
                        <li className="song-item">
                            <img src= {window.elvis} alt="elvis" />
                            <label className = "song-title">Jailhouse Rock</label>
                            <label className = "artist-name">Elvis Presley</label>
                        </li>
                        <li className="song-item">
                            <img src= {window.justinbieber} alt="justinbieber" />
                            <label className = "song-title">Deserve You</label>
                            <label className = "artist-name">Justin Bieber</label>
                        </li>
                        <li className="song-item">
                            <img src= {window.kiss} alt="kiss" />
                            <label className = "song-title">Detroit Rock City</label>
                            <label className = "artist-name">Kiss</label>
                        </li>
                        <li className="song-item">
                            <img src= {window.mariahcarey} alt="mariahcarey" />
                            <label className = "song-title">Always Be My Baby</label>
                            <label className = "artist-name">Mariah Carey</label>
                        </li>
                        <li className="song-item">
                            <img src= {window.thegame} alt="thegame" />
                            <label className = "song-title">Hate It Or Love It</label>
                            <label className = "artist-name">The Game</label>
                        </li>
                        <li className="song-item">
                            <img src= {window.tupac} alt="Tupac" />
                            <label className = "song-title">Ambitionz Az A Ridah</label>
                            <label className = "artist-name">2Pac</label>
                        </li>
                    </ul>
            </div>
        </div>
    )
}

export default SplashBody;