import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchAllComments } from '../../action/comment_actions';

const mSTP = (state, ownProps) => {

    return {
        comments: Object.values(state.entities.comments),
        user: state.entities.users[ownProps.match.params.userId]
    }
}

const mDTP = (dispatch) => {

    return {
        fetchAllComments: () => dispatch(fetchAllComments())
    }
}

class UserComments extends React.Component {

    componentDidMount() {
        this.props.fetchAllComments()
    }

    render() {

        const userComments = this.props.comments.filter(comment => comment.commenter_id === this.props.user.id).slice(this.props.comments.length - 4);
        let commentItems =  userComments.map((comment,idx) => {
            return (
                    <li className = "user-comment-list-item" key = {`comment=${idx}`}>
                        <Link to = {`/songs/${comment.song_id}`}>
                            <span>"{comment.body}"</span>
                            <span>{comment.posted} ago</span>
                        </Link>
                    </li>  
            ) 
        });
        return (
            <ul className = "user-comment-list">
                {commentItems}
            </ul>
        )
    }
}

export default withRouter(connect(mSTP, mDTP)(UserComments));