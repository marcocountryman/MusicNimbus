import * as CommentApiUtil from '../util/comments_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";

const receiveComment = comment => {

    return {
        type: RECEIVE_COMMENT,
        comment
    };
};

const removeComment = commentId => {

    return {
        type: REMOVE_COMMENT,
        commentId
    };
};

const receiveAllComments = comments => {

    return {
        type: RECEIVE_ALL_COMMENTS,
        comments
    };
};

export const createComment = comment => dispatch => {

    return CommentApiUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
}

export const deleteComment = commentId => dispatch => {

    return CommentApiUtil.deleteComment(commentId)
    .then(() => dispatch(removeComment(commentId)))
}

export const fetchAllComments = () => dispatch => {

    return CommentApiUtil.fetchAllComments()
    .then(comments => dispatch(receiveAllComments(comments)))
    
}