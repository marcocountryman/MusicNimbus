export const createComment = (comment) => {

    return $.ajax({
        method: 'POST',
        url: '/api/comments'
    })
};

export const deleteComment = (commentId) => {

    return $.ajax({
        method: 'DELETE',
        url: `/api/comments/${commentId}`
    })
};