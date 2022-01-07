require 'open-uri'

Song.delete_all
User.delete_all

user1 = User.create!(
    email: "hunter12@hotmail.com",
    password: "password",
    age: 28,
    displayname: "Esteemed Guest"
)




# song1 = Song.create!(
#     title: 'Still the One',
#     uploader_id: 5,
#     genre: 'Hype',
#     artist: 'Shania Twain'
# )

# song2 = Song.create!(
#     title: 'La Isla Bonita',
#     uploader_id: 2,
#     genre: 'Hype',
#     artist: 'Madonna'
# )


# THIS JUST IS NOT WORKING AT ALL
file = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/tokyo.png');
user1.photo.attach(io: file, filename: 'tokyo.png');