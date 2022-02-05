json.extract! song, :id, :title, :artist, :uploader_id, :genre

json.uploader do
    json.extract! song.uploader, :id, :displayname

    if song.uploader.photo.attached?
        json.profilePic url_for(song.uploader.photo)
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

