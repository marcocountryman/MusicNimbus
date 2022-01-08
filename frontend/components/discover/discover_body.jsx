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
                <li className = "song-container">
                    <img src={song.imageUrl} alt="trapsong" className= "discover-images"/>
                    <span className = "song-title">{song.title}</span>
                    <span className = "artist-name">{song.artist}</span>
                </li>
            )
        })

        const hipHopItems = this.props.songs.filter(song => song.genre === "Hip Hop");
        const renderHipHop = hipHopItems.map(song => {
            return (
                <li className = "song-container">
                    <img src={song.imageUrl} alt="hiphopsong" className= "discover-images"/>
                    <span className = "song-title">{song.title}</span>
                    <span className = "artist-name">{song.artist}</span>
                </li>
            )
        })

        const studyItems = this.props.songs.filter(song => song.genre === "Study");
        const renderStudy = studyItems.map(song => {
            return (
                <li className = "song-container">
                    <img src={song.imageUrl} alt="studysong" className= "discover-images"/>
                    <span className = "song-title">{song.title}</span>
                    <span className = "artist-name">{song.artist}</span>
                </li>
            )
        })

        const jazzItems = this.props.songs.filter(song => song.genre === "Jazz");
        const renderJazz = jazzItems.map(song => {
            return (
                <li className = "song-container">
                    <img src={song.imageUrl} alt="jazzsong" className= "discover-images"/>
                    <span className = "song-title">{song.title}</span>
                    <span className = "artist-name">{song.artist}</span>
                </li>
            )
        })

        const classicalItems = this.props.songs.filter(song => song.genre === "Classical");
        const renderClassical = classicalItems.map(song => {
            return (
                <li className = "song-container">
                    <img src={song.imageUrl} alt="classicalsong" className= "discover-images"/>
                    <span className = "song-title">{song.title}</span>
                    <span className = "artist-name">{song.artist}</span>
                </li>
            )
        })


        return ( 
        <div className = "discover-content-container">
            <div className = "discover-content">
                <div className = "discover-songs">

                    <div className = 'genre-container'>
                        <div className = "genre-label">
                            <h2 className = "genre-header">Hip Hop</h2>
                            <p className = "genre-desc">Bump your head to this</p>
                        </div>
                        <ul className = "genre-content">
                            {renderHipHop}
                        </ul>  
                    </div>

                    <div className = 'genre-container'>
                        <div className = "genre-label">
                            <h2 className = "genre-header">Trap</h2>
                            <p className = "genre-desc">Get down And dirty</p>
                        </div>
                        <ul className = "genre-content">
                            {renderTrap}
                        </ul>

                    </div>

                    <div className = 'genre-container'>
                        <div className = "genre-label">
                            <h2 className = "genre-header">Study</h2>
                            <p className = "genre-desc">Woosah, study and calm</p>
                        </div>
                        <ul className = "genre-content">
                            {renderStudy}
                        </ul>
                    </div>

                    <div className = 'genre-container'>
                        <div className = "genre-label">
                            <h2 className = "genre-header">Jazz</h2>
                            <p className = "genre-desc">Swing along to this</p>
                        </div>
                        <ul className = "genre-content">
                            {renderJazz}
                        </ul>
                    </div>

                    <div className = 'genre-container'>
                        <div className = "genre-label">
                            <h2 className = "genre-header">Classical</h2>
                            <p className = "genre-desc">You're gonna need a cup of tea</p>
                        </div>
                        <ul className = "genre-content">
                            {renderClassical}
                        </ul>
                    </div>
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