import React from 'react';

class UpdateForm extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.song.id,
            title: this.props.song.title,
            artist: this.props.song.artist,
            genre: this.props.song.genre,
            imageFile: null,
            audioFile: null,
            uploadStatus: false,
            preview: this.props.song.imageUrl
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.handleAudio = this.handleAudio.bind(this);
        this.handleGenre = this.handleGenre.bind(this);
    }

    componentDidMount() {
        this.props.fetchSong(this.props.modalId);
    }

    componentWillUnmount() {
        this.props.removeSongErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        
        if (this.props.song.id) {
            formData.append('song[id]', this.state.id);
        }
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
        this.props.updateSong(formData).then(this.props.closeModal);
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

      
        return(
            <div className = "update-form-container">
                <img src= {this.state.preview} alt= "song-image" className = "update-song-image"/>
                <form onSubmit = {this.handleSubmit} className = "update-form">
                    <input type="text"
                    value = {this.state.title}
                    placeholder = {this.state.title}
                    onChange = {this.update("title")}
                    className = "update-form-input"
                    />

                     <input type="text"
                    value = {this.state.artist}
                    placeholder = {this.state.artist}
                    onChange = {this.update("artist")}
                    className = "update-form-input"
                    />

                    <select value = {this.state.genre}
                    onChange = {this.handleGenre}
                    className = "upload-genre-list"
                    >
                        <option hidden>{this.state.genre}</option>
                        <option value="Hip Hop">Hip Hop</option> 
                        <option value="Trap">Trap</option> 
                        <option value="Study">Study</option> 
                        <option value="Classical">Classical</option> 
                        <option value="Jazz">Jazz</option> 
                                    
                    </select>

                    <h3 className = "update-file">Select Audio</h3>
                    <input type="file"
                    onChange = {this.handleAudio}
                    placeholder='Select Audio'
                    className = "update-file"
                    />
                                  

                    <h3 className = "update-file">Select Image</h3>
                    <input type="file"
                    onChange = {this.handleImage}
                    placeholder='Select Image'
                    className = "update-file"
                    />
                    <div className = "update-button-container">
                        <input type="submit" value = "Update" className = "update-button"/>
                    </div>

                {this.errorMessages()}
                </form>
            </div>
        )
    }
}

export default UpdateForm;