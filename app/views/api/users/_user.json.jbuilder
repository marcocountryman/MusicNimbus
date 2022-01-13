json.extract! user, :id, :email, :displayname

if !user.photo.attached?
    json.defaultPhoto "https://music-nimbus-seeds.s3.amazonaws.com/other-drake.jpg"
end