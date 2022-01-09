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
                <img src={this.props.song.imageUrl} alt="song-image" />
            </div>
        )
    }
}

export default SongShow;