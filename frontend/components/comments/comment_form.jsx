import React from 'react';
import { FaRegComment, FaBars, FaTrash } from 'react-icons/fa';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            commenter_id: this.props.currentUser.id,
            song_id: this.props.match.params.id
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps) {
            if (prevProps.match.params.id !== this.props.match.params.id) {
                this.setState({ song_id: this.props.match.params.id })
            }
        }
    }

    componentDidMount() {
        this.props.fetchSong(this.props.match.params.id)
    }

    clear() {
        this.setState({body: ""});
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state).then(this.clear())
    }

    render() {
        const songId = this.props.match.params.id;
        
        let editButton = this.props.song.uploader_id === this.props.currentUser.id ? 
            <button onClick = {() => this.props.openModal('update', songId)} className = "update-song-button">
                <FaBars/>
                Edit Song
            </button> : null;

        let deleteButton = this.props.song.uploader_id === this.props.currentUser.id ?
            <button onClick = {() => this.props.deleteSong(songId).then(() => this.props.history.push('/discover'))} className = "delete-song-button">
                <FaTrash/>
                Delete Song
            </button> : null;

        return (
            <div className = "comment-form-container">
                <div className = "comment-section">
                    <img src= {this.props.currentUser.defaultPhoto} alt="profilepic" className = "comment-img" />
                
                    <form className = "comment-form">
                        <input type="text" 
                        value = {this.state.body} 
                        onChange = {this.update('body')} 
                        placeholder='Write a comment...'
                        className = "comment-input-area"
                        />
                    </form>
                </div>
                <div className = "comment-button-container">
                     <button onClick = {this.handleSubmit} className = "comment-button">
                        <FaRegComment/>
                        Comment
                    </button>
                    {editButton}
                    {deleteButton}
                </div>
                
            </div>
        )
    }
}

export default CommentForm;