json.comment do
    json.extract! @comment, :id, :body, :commenter_id, :song_id, :created_at
    json.commented time_ago_in_words(@comment.created_at)
end

json.commenter do
    json.partial! "/api/users/user", user: @comment.commenter
end