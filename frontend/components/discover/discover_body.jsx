import React, { isValidElement } from 'react';

class DiscoverBody extends React.Component {
    
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllSongs();
    }

    render() {    
        const trapItems = this.props.songs.filter(song => song.genre === "Trap");
        const renderTrap = trapItems.map(song => {
            return (
                <li>
                    <img src={song.imageUrl} alt="" />
                    <span>{song.title}</span>
                    <span>{song.artist}</span>
                </li>
            )
        })

        const hipHopItems = this.props.songs.filter(song => song.genre === "Hip Hop");
        const renderHipHop = hipHopItems.map(song => {
            return (
                <li>
                    <img src={song.imageUrl} alt="" />
                    <span>{song.title}</span>
                    <span>{song.artist}</span>
                </li>
            )
        })

        const studyItems = this.props.songs.filter(song => song.genre === "Study");
        const renderStudy = studyItems.map(song => {
            return (
                <li>
                    <img src={song.imageUrl} alt="" />
                    <span>{song.title}</span>
                    <span>{song.artist}</span>
                </li>
            )
        })

        const jazzItems = this.props.songs.filter(song => song.genre === "Jazz");
        const renderJazz = jazzItems.map(song => {
            return (
                <li>
                    <img src={song.imageUrl} alt="" />
                    <span>{song.title}</span>
                    <span>{song.artist}</span>
                </li>
            )
        })

        const classicalItems = this.props.songs.filter(song => song.genre === "Classical");
        const renderClassical = classicalItems.map(song => {
            return (
                <li>
                    <img src={song.imageUrl} alt="" />
                    <span>{song.title}</span>
                    <span>{song.artist}</span>
                </li>
            )
        })


        return ( 
        <div className = "discover-content-container">
            <div className = "discover-content">
                <div className = "discover-songs">
                    <ul className = "genre-hip-hop">
                        {renderHipHop}
                    </ul>
                    <ul className = "genre-trap">
                        {renderTrap}
                    </ul>
                    <ul className = "genre-study">
                        {renderStudy}
                    </ul>
                    <ul className = "genre-jazz">
                        {renderJazz}
                    </ul>
                    <ul className = "genre-classical">
                        {renderClassical}
                    </ul>
                </div>
                <div className = "discover-sidebar">
                    Sidebar
                </div>
            </div>
        </div>    
        )
    }
}

export default DiscoverBody;