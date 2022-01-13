json.extract! user, :id, :email, :displayname, :songs

if !user.photo.attached?
    json.defaultPhoto "https://music-nimbus-seeds.s3.amazonaws.com/default.jpg"
end