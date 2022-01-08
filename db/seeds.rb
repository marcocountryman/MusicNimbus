require 'open-uri'

#SONG CREDITS PUT THIS ON THE FRONT END

# Silent Wood by Purrple Cat | https://purrplecat.com/
# Music promoted by https://www.chosic.com/free-music/all/
# Creative Commons CC BY-SA 3.0
# https://creativecommons.org/licenses/by-sa/3.0/

# Floating Castle by Purrple Cat | https://purrplecat.com/
# Music promoted on https://www.chosic.com/free-music/all/
# Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)
# https://creativecommons.org/licenses/by-sa/3.0/

# Journey’s End by Purrple Cat | https://purrplecat.com/
# Music promoted by https://www.chosic.com/free-music/all/
# Creative Commons CC BY-SA 3.0
# https://creativecommons.org/licenses/by-sa/3.0/

# herbal tea by Artificial.Music | https://soundcloud.com/artificial-music/
# Licensed under Creative Commons: Attribution 3.0 Unported (CC BY 3.0)
# https://creativecommons.org/licenses/by/3.0/
# Music promoted by https://www.chosic.com/free-music/all/ 

#Study https://www.chosic.com/free-music/jazz/?mixtag=lofi

# Music: https://www.chosic.com/free-music/all/ 
# Music: https://www.chosic.com/free-music/all/ 
# Music: https://www.chosic.com/free-music/all/ 

# Music by lvymusic from Pixabay

# Music by <a href="/users/lvymusic-24939435/?tab=audio&amp;utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=audio&amp;utm_content=12648">lvymusic</a> 
# from <a href="https://pixabay.com/music/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=12648">Pixabay</a>

# JuliusH, Caffeine Creek Band, Nesrality
# https://pixabay.com/music/search/genre/smooth%20jazz/

#stare8sound, Skilsel, Phantastic Beats, ETRNLPRODUCER, NbeatMusic
# https://pixabay.com/music/search/genre/old%20school%20hip%20hop/

# Music by AleXZavesa from Pixabay
# https://pixabay.com/music/search/genre/trap/

#Lesfm
# https://pixabay.com/music/search/lofi/

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