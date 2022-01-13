import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container';
import SongPlayerContainer from '../song_player/song_player_container';

class UploadForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: "",
            artist: "",
            genre: "",
            imageFile: null,
            audioFile: null,
            uploadStatus: false,
            preview: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.handleAudio = this.handleAudio.bind(this);
        this.handleGenre = this.handleGenre.bind(this);
        // this.handleUpload = this.handleUpload.bind(this);
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
        this.props.createSong(formData).then(() => this.props.history.push('./discover'))
    }


    handleImage(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {  
            this.setState({ imageFile: file, preview: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
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
        console.log(this.state)

        const prev = this.state.preview ? <img src = {this.state.preview} className = "preview-image"/> 
        : <img src = 'https://music-nimbus-seeds.s3.amazonaws.com/preview.jpg' className = "preview-image"/>;

        return (
            <div>
                {/* <NavBarContainer/> */}
                <div className = 'upload-container'>
                    <div className = 'upload-form-container'>
                        <div className = "upload-top">

                            <div className = "upload-top-content">
                                <h2 className = "upload-message">Drop that fire</h2>
                                <span className='upload-fire'>🔥</span>
                            </div>
                        </div>
                        
                        <div className = "upload-form">
                            {prev}
                            <form onSubmit = {this.handleSubmit} className = 'upload-inputs'>
                                    
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
                                    className = "upload-genre-list"
                                    >
                                        <option hidden> Pick a Genre</option>
                                        <option value="Hip Hop">Hip Hop</option> 
                                        <option value="Trap">Trap</option> 
                                        <option value="Study">Study</option> 
                                        <option value="Classical">Classical</option> 
                                        <option value="Jazz">Jazz</option> 
                                    
                                    </select>
                                    
                                        <h3 className = "upload-label">Select Audio</h3>
                                        <input type="file"
                                        onChange = {this.handleAudio}
                                        placeholder='Select Audio'
                                        className = "file-button"
                                        />
                                  

                                        <h3 className = "upload-label">Select Image</h3>
                                         <input type="file"
                                        onChange = {this.handleImage}
                                        placeholder='Select Image'
                                        className = "file-button"
                                        />
                                   

                                    <input type="submit" value = "Upload" className = "upload-button"/>

                                    {this.errorMessages()}
                            </form>

                        </div>
                        
                        <div className = "upload-bottom">
                            <h3 className = 'copyright-message'>
                                By uploading, you confirm that your sounds comply with our Terms of Use and you don't infringe anyone else's rights.
                            </h3>

                           <ul className = "tech-used-list">
                                    <li className = "tech-used-item">React</li>
                                    <li className = "tech-used-item">Redux</li>
                                    <li className = "tech-used-item">JavaScript</li>
                                    <li className = "tech-used-item">Ruby</li>
                                    <li className = "tech-used-item">Rails</li>
                                    <li className = "tech-used-item">AWS</li>
                                    <li className = "tech-used-item">CSS</li>
                                    <li className = "tech-used-item">HTML</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <SongPlayerContainer/> */}
            </div>
        )
    }
}
export default UploadForm;