import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container';

class UploadForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: "",
            artist: "",
            genre: "",
            imageFile: null,
            audioFile: null
        }
        this.handleSubmit.bind(this);
        this.handleImage.bind(this);
        this.handleAudio.bind(this);
    }

    componentWillUnmount() {
        this.props.removeSongErrors();
    }

    handleSubmit(e) {
        e.preventDefault();

    }

    handleImage(e) {

    }

    handleAudio(e) {

    }

    handleGenre(e) {

        return (e) => {
            this.setState({ genre: e.currentTarget.value });
        }
    }

    update(field) {
        
        return (e) => {
            this.setState({ [field] : e.currentTarget.value })
        }
    }

    errorMessages() {
        return(
            <ul className = "session-errors">
                {this.props.errors.map((error, i) => (
                <li key={`error-${i}`} 
                    className = "errors-item">
                    {error}
                </li>
                ))}
            </ul>
        );
    }

    render() {

        return (
            <div>
                <NavBarContainer/>
                <div className = 'upload-container'>
                    <div className = 'upload-form-container'>
                        <div className = "upload-top">
                            TOP
                        </div>
                        
                        <div className = "upload-form">
                            
                            <form onSubmit = {this.handleSubmit}>
                                    
                                    <input type="text" 
                                    value = {this.state.title} 
                                    onChange = {this.update("title")}
                                    placeholder='Song Title'
                                    className='upload-form-input' 
                                    />

                                    <input type="text" 
                                    value = {this.state.artist} 
                                    onChange = {this.update("artist")}
                                    placeholder='Artist Name'
                                    className='upload-form-input' 
                                    />

                                    <select value = {this.state.genre}
                                    onChange = {this.handleGenre}
                                    >
                                        <option hidden> Pick a Genre</option>
                                        <option value="Hip Hop">Hip Hop</option> 
                                        <option value="Trap">Trap</option> 
                                        <option value="Study">Study</option> 
                                        <option value="Classical">Classical</option> 
                                        <option value="Hype">Hype</option> 
                                    
                                    </select>

                                    <input type="file"
                                    
                                    />

                                    <input type="file"
                                    
                                    />

                            </form>

                        </div>
                        
                        <div className = "upload-bottom">
                            BOTTOM
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default UploadForm;