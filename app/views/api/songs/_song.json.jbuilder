json.extract! song, :id, :title, :artist, :uploader_id, :genre

# json.comments song.comments.pluck(:id)
json.comments do 
    song.comments.each do |comment|
         json.set! comment.id do
            json.extract! comment, :id, :body
                json.commenter do
                    if comment.commenter.photo.attached?
                        json.profilePic url_for(comment.commenter.photo)
                    else
                        json.profilePic "https://music-nimbus-seeds.s3.amazonaws.com/other-drake.jpg"
                    end
                    json.extract! comment.commenter, :id, :displayname
                end
            json.posted time_ago_in_words(comment.created_at)
        end
    end
end

json.uploader do
    json.extract! song.uploader, :id, :displayname

    if song.uploader.photo.attached?
        json.profilePic url_for(song.iploader.photo)
    else
        json.profilePic "https://music-nimbus-seeds.s3.amazonaws.com/other-drake.jpg"
    end
end


if song.image_file.attached?
    json.set! "imageUrl", url_for(song.image_file)
end

if song.audio_file.attached?
    json.set! "audioSource", url_for(song.audio_file)
end

