import React from 'react';
import { FaRegComment, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class CommentThread extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { deleteComment } = this.props;
        
        let commentThread = this.props.comments.length < 1 ? 
        <p>Nothing to See Here</p> :
        this.props.comments.map( (comment, idx) => {

            let deleteButton = comment.commenter.id === this.props.currentUser.id ?
            <div className  = "delete-container">
                <FaTrash onClick = {() => deleteComment(comment.id)} className = "delete-comment"/> 
            </div> : null;
            
            return (
                <li key = {`comment-${idx}`} className = "comment-item">        
                    <div className = "comment-item-left">
                        <Link to = {`/users/${comment.commenter.id}`}>
                            <img src= {comment.commenter.profilePic} alt="profile-pic" className = "commenter-photo"/>
                        </Link>

                        <div className = "commenter-info">
                            <span className = "comment-commenter">{comment.commenter.displayname}</span>
                            <span className = "comment-body">{comment.body}</span>
                        </div>
                        
                    </div>
       
                    <div className = "comment-item-right">
                        <span className = "comment-posted">{comment.posted}</span>
                        {deleteButton}
                    </div>              
                </li>
            )

        });

        let commentCount = this.props.comments.length > 0 ?
            <div className = "comment-number">
                <FaRegComment className='comment-icon'/>
                <span className = "comment-count">{this.props.comments.length} comments</span>
            </div> :
            null;
        
        return (
            <div className = "comment-thread-container">
                <div className = "song-uploader-info">
                    <Link to = {`/users/${this.props.song.uploader.id}`}>
                        <img src= {this.props.song.uploader.profilePic} alt= "uploader-pic" className = "comment-uploader-pic"/>
                    </Link>
                    <span>{this.props.song.uploader.displayname}</span>
                </div>
                <div className = "comment-list-container">
                    {commentCount}
                    <ul className = "comment-list">
                        {commentThread}
                    </ul>
                </div>
            </div>
         
        )
    }
}

export default CommentThread;