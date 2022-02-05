@comments.each do |comment|

    json.set! comment.id do
        json.partial! 'comment', comment: comment
        json.posted time_ago_in_words(comment.created_at)
    end
end