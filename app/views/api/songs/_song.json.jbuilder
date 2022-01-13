json.extract! song, :id, :title, :artist, :uploader_id, :genre, :uploader

# json.uploader song.uploader.displayname

if song.image_file.attached?
    json.set! "imageUrl", url_for(song.image_file)
end

if song.audio_file.attached?
    json.set! "audioSource", url_for(song.audio_file)
end


# debugger
if !song.uploader.photo.attached?
    json.profilePic "https://music-nimbus-seeds.s3.amazonaws.com/default.jpg"
end


# if !user.photo.attached?
#     json.defaultPhoto "https://music-nimbus-seeds.s3.amazonaws.com/default.jpg"
# end