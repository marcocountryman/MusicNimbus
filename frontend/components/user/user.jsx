import React from 'react';

class UserShow extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
        this.props.fetchAllSongs();
    }

    render() {

        if (!this.props.user) return null;
        const userSongs = this.props.songs.filter(song => song.uploader_id === this.props.user.id);
        const songItems = userSongs.map((song,idx) => {
        let num = idx + 1;
            return (
                <li className = "user-song-list-item">
                    <img src= {song.imageUrl} alt="song-photo" className = "song-list-image"/>
                    <div className = "song-list-item-info">
                        <span className = "song-number">{num}</span>
                        <span className = "song-list-artist">{song.artist}</span>
                        <span>-</span>
                        <span className = "song-list-title">{song.title}</span>
                    </div>
                </li>
            )
        })
        return (
            <div className = "user-content-container">
                <div className = "user-top">

                    <div className= 'user-top-left-container'>

                        <div className = "user-top-left">
                            <img src= {this.props.user.defaultPhoto} alt= "default-pic" className='user-pic'/>
                            
                            <div className = "profile-username-container">
                                <span className = "profile-username">{this.props.user.displayname}</span>
                            </div>
                        </div>

                    </div>

                </div>

                <div className = "user-bottom">
                    <div className = "user-song-top">
                            <span className = "uploaded-songs">Uploaded Songs</span>
                    </div>

                    <div className = "user-songs">
                        <ul className = "user-song-list">
                            {songItems}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default UserShow;