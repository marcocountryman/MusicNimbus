import React from 'react';

class CommentThread extends React.Component {

    componentDidUpdate(prevProps) {
        if (prevProps) {
            if (prevProps)
        }
    }

    render() {
        let commentThread = this.props.comments.length < 1 ? 
        <p>Nothing to See Here</p> :
        this.props.comments.map( (comment, idx) => {
            return (
                <li>{comment.body}</li>
            )

        })
        return (
            <div>
                <ul>
                    {commentThread}
                </ul>
            </div>
        )
    }
}

export default CommentThread;