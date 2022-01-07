@songs.each do |song|

    json.set! song.id do
        json.partial! 'song', song: song

        if song.image_file.attached?
            json.set! "image", url_for(song.image_file)
        else
            json.set! "image", 'https://music-nimbus-seeds.s3.amazonaws.com/tokyo.png'
        end
    end


end