# json.extract! song.uploader, :id, :displayname

json.song do
    json.partial! "song", song: @song
end