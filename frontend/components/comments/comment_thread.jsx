import React from 'react';
import { FaRegComment, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';


class CommentThread extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllComments()
    }
    
    render() {
 
        const { deleteComment } = this.props;
        const songComments = this.props.comments.filter(comment => comment.song_id === Number(this.props.match.params.id));
        const currentUserId = this.props.currentUser.id;
        
        let commentThread = songComments.length > 0  ? 
        
        songComments.map((comment, idx) => {

            let deleteButton = comment.commenter.id === currentUserId ?

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
                        <div className = "delete-button-container">
                            {deleteButton}           
                        </div>
                    </div>
                </li>
            ) 
        }) :  
        <div className = "no-comment-container">
            <span className = "no-comment-message">Be the first to drop a comment!</span>
            <img src= "https://music-nimbus-seeds.s3.amazonaws.com/comment_holder.jpg" alt="no-comments" className = "no-comment-image" />
        </div>
        
        let commentCount =
            <div className = "comment-number">
                <FaRegComment className='comment-icon'/>
                <span className = "comment-count">{songComments.length} comments</span>
            </div> 
        
        return (
            <div className = "comment-thread-container">
                <div className = "song-uploader-info">
                    <Link to = {`/users/${this.props.song.uploader.id}`}>
                        <img src= {this.props.song.uploader.profilePic} alt= "uploader-pic" className = "comment-uploader-pic"/>
                    </Link>
                    <span className = "uploader-displayname">{this.props.song.uploader.displayname}</span>
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