import React, { isValidElement } from 'react';

class DiscoverBody extends React.Component {
    
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllSongs();
    }

    render() {
        const songItems = this.props.songs.map(song => {
            return <li>
                {song.genre}
            </li>
        })
        return (
            <div>
                <ul>
                    {songItems}
                </ul>
            </div>
        )
    }
}

export default DiscoverBody;