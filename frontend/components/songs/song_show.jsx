import React from 'React'
import NavBarContainer from '../navbar/nav_bar_container';

class SongShow extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
       this.props.fetchSong(this.props.match.params.id);
    //    debugger
    }

    render() {

        if (!this.props.song) return null;
        return (
            <div>
                <NavBarContainer/>

                <div className ='show-page-container'>
                        
                        <div className = 'show-page-content'>
                                <div className = "show-page-banner">
                                        <div className = 'show-banner-left'>
                                                <div className = 'show-left-content'>
                                                        <p className = "play-button">▶️</p>
                                                        <div className = 'song-info'>
                                                            <p className = 'play-top'>{this.props.song.title}</p>
                                                            <p className = 'play-bottom'>{this.props.song.artist}</p>
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
                                            COMMENTS
                                    </div>

                                    <div className = 'show-page-right'>
                                            RIGHT
                                    </div>

                                </div>
                        </div>
                </div>
                {/* <img src={this.props.song.imageUrl} alt="song-image" /> */}
            </div>
        )
    }
}

export default SongShow;