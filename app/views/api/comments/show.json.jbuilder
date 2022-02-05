json.partial! "comment", comment: @comment

json.posted time_ago_in_words(@comment.created_at)
    json.commenter do
            
        if @comment.commenter.photo.attached?
            json.profilePic url_for(@comment.commenter.photo)
        else
            json.profilePic "https://music-nimbus-seeds.s3.amazonaws.com/other-drake.jpg"         
        end
        
        json.extract! @comment.commenter, :id, :displayname
end