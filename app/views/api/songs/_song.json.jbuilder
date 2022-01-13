json.extract! song, :id, :title, :artist, :uploader_id, :genre, :uploader

if song.image_file.attached?
    json.set! "imageUrl", url_for(song.image_file)
end

if song.audio_file.attached?
    json.set! "audioSource", url_for(song.audio_file)
end

if !song.uploader.photo.attached?
    json.profilePic "https://music-nimbus-seeds.s3.amazonaws.com/other-drake.jpg"
end
