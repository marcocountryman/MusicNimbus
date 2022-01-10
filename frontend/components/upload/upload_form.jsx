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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.handleAudio = this.handleAudio.bind(this);
        this.handleGenre = this.handleGenre.bind(this);
    }

    componentWillUnmount() {
        this.props.removeSongErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('song[title]', this.state.title);
        formData.append('song[artist]', this.state.artist);
        formData.append('song[genre]', this.state.genre);
        formData.append('song[uploader_id]', this.props.currentUser.id);
        if (this.state.imageFile) {
            formData.append('song[image_file]', this.state.imageFile);
        }
        if (this.state.audioFile) {
            formData.append('song[audio_file]', this.state.audioFile);
        }
        this.props.createSong(formData)
    }

    handleImage(e) {

        this.setState({ imageFile: e.currentTarget.files[0] });
    }

    handleAudio(e) {

        this.setState({ audioFile: e.currentTarget.files[0] });
    }

    handleGenre(e) {
        this.setState({ genre: e.currentTarget.value });   
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
                                    
                                    <label> Song
                                        <input type="file"
                                        onChange = {this.handleAudio}
                                        placeholder='Select Audio'
                                        />
                                    </label>

                                    <label> Photo
                                         <input type="file"
                                        onChange = {this.handleImage}
                                        placeholder='Select Image'
                                        />
                                    </label>

                                    <input type="submit" value = "Upload" />

                                    {this.errorMessages()}
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