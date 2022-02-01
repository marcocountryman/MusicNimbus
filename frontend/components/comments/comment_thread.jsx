import React from 'react';
import { FaRegComment } from 'react-icons/fa';
class CommentThread extends React.Component {

    constructor(props) {
        super(props);
    }

  
    
    render() {
        // if (!this.props.comments.length) return null;
        const { deleteComment } = this.props
        let commentThread = this.props.comments.length < 1 ? 
        <p>Nothing to See Here</p> :
        this.props.comments.map( (comment, idx) => {

            let deleteButton = comment.commenter.id === this.props.currentUser.id ?

            <button onClick = {() => deleteComment(comment.id)}>Delete</button> : null;
            
            // let postedTime = comment.posted.split(" ").slice(1).join(" ") + " ago";

            return (
                <li key = {`comment-${idx}`} className = "comment-item">        
                    <div className = "comment-item-left">
                        <img src= {comment.commenter.profilePic} alt="profile-pic" className = "commenter-photo"/>
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
                    <img src= {this.props.song.uploader.profilePic} alt= "uploader-pic" className = "comment-uploader-pic"/>
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