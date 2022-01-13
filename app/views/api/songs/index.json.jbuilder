@songs.each do |song|

    json.set! song.id do
        json.partial! 'song', song: song
        # json.set! 'uploader', song.uploader.displayname
    end


end


# json.users do
#   @songs.each do |song|
#     json.set! song.uploader_id do
#       json.partial! "/api/users/user", user: song.uploader
#     end
# end