import React from 'react';
import { FaRegComment } from 'react-icons/fa';
class CommentThread extends React.Component {

    constructor(props) {
        super(props)
    }
    
    render() {

        let commentThread = this.props.comments.length < 1 ? 
        <p>Nothing to See Here</p> :
        this.props.comments.map( (comment, idx) => {

            let deleteButton = comment.commenter.id === this.props.currentUser.id ? 
            <button>Delete</button> : null

            return (
                <li key = {`comment-${idx}`}>
                    <img src= {comment.commenter.profilePic} alt="profile-pic" />
                    <span>{comment.commenter.displayname}</span>
                    <span>{comment.body}</span>
                    <span>{comment.posted}</span>
                    {deleteButton}
                </li>
            )

        });

        let commentCount = this.props.comments.length > 0 ?
            <div>
                <FaRegComment/>
                <span>{this.props.comments.length} comments</span>
            </div> :
            null;
        
        return (
            <div className = "comment-thread-container">
                <div className = "song-uploader-info">
                    <img src= {this.props.song.uploader.profilePic} alt= "uploader-pic" className = "comment-uploader-pic"/>
                    <span>{this.props.song.uploader.displayname}</span>
                </div>
                <div>
                    {commentCount}
                    <ul>
                        {commentThread}
                    </ul>
                </div>
            </div>
         
        )
    }
}

export default CommentThread;