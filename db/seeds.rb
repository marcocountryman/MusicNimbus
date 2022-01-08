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
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('songs')

user1 = User.create!(email: "hunter12@hotmail.com", password: "hunter12", age: 28, displayname: "Esteemed Guest")
user2 = User.create!(email: "therealjoebiden@hotmail.com", password: "hunter12", age: 32, displayname: "Joe Biden")
user3 = User.create!(email: "mrcelebrity.com", password: "hunter12", age: 19, displayname: "George Bush")
user4 = User.create!(email: "justinbieberfan@hotmail.com", password: "hunter12", age: 22, displayname: "Bill Clinton")
user5 = User.create!(email: "islandlover@hotmail.com", password: "hunter12", age: 33, displayname: "Al Gore")
user6 = User.create!(email: "mrworldwide@hotmail.com", password: "hunter12", age: 21, displayname: "Sara Palin")
user7 = User.create!(email: "mrsworldwide@hotmail.com", password: "hunter12", age: 23, displayname: "John Kerry")
user8 = User.create!(email: "sayitaintso@hotmail.com", password: "hunter12", age: 24, displayname: "Ted Cruz")
user9 = User.create!(email: "helloworld@hotmail.com", password: "hunter12", age: 26, displayname: "Marco Rubio")
user10 = User.create!(email: "superprops@hotmail.com", password: "hunter12", age: 27, displayname: "Mitt Romney")

#TITLE, ARTIST, GENRE, UPLOADER-ID
#['Trap', 'Study', 'Jazz', 'Classical', 'Hip Hop'] 

song1 = Song.create!(title: "After Midnight", artist: "Julius H", genre: 'Jazz', uploader_id: user1.id)
image1 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/jazz-art.jpg')
song1.image_file.attach(io: image1, filename: 'jazz-art.jpg')
sound1 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/after-midnight-juliush.mp3')
song1.audio_file.attach(io: sound1, filename: 'after-midnight-julius.mp3')

song2 = Song.create!(title: "D 960 III", artist: "Bach", genre: 'Classical', uploader_id: user1.id)
image2 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/music-sheet.jpg')
song2.image_file.attach(io: image2, filename: 'music-sheet.jpg')
sound2 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/d-960-iii-bach.mp3')
song2.audio_file.attach(io: sound2, filename: 'd-960-iii-bach.mp3')

song3 = Song.create!(title: "Back to Old School", artist: "Star8sound", genre: 'Hip Hop', uploader_id: user1.id)
image3 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/dance-hiphop.jpg')
song3.image_file.attach(io: image3, filename: 'dance-hiphop.jpg')
sound3 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/back-to-oldschool-stare8sound.mp3')
song3.audio_file.attach(io: sound3, filename: 'back-to-oldschool-stare8sound.mp3')

song4 = Song.create!(title: "Herbal Tea", artist: "Artificial Music", genre: 'Study', uploader_id: user1.id)
image4 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/book.jpg')
song4.image_file.attach(io: image4, filename: 'dance-hiphop.jpg')
sound4 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/herbal-tea.mp3')
song4.audio_file.attach(io: sound4, filename: 'herbal-tea.mp3')

song5 = Song.create!(title: "Aggressive Trap", artist: "Ivy Music", genre: 'Trap', uploader_id: user1.id)
image5 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/graffiti.jpg')
song5.image_file.attach(io: image5, filename: 'graffiti.jpg')
sound5 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/aggressive-trap-ivy-music.mp3')
song5.audio_file.attach(io: sound5, filename: 'aggressive-trap-ivy-music.mp3')

song6 = Song.create!(title: "Goldberg Variations", artist: "Bach", genre: 'Classical', uploader_id: user2.id)
image6 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/orchestra.jpg')
song6.image_file.attach(io: image6, filename: 'orchestra.jpg')
sound6 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/goldberg-variations(Bach).mp3')
song6.audio_file.attach(io: sound6, filename: 'goldberg-variations(Bach).mp3')

song7 = Song.create!(title: "Energetic Hip Hop", artist: "Skilsel", genre: 'Hip Hop', uploader_id: user2.id)
image7 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/mixtape.jpg')
song7.image_file.attach(io: image7, filename: 'mixtape.jpg')
sound7 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/energetic-hiphop-skilsel.mp3')
song7.audio_file.attach(io: sound7, filename: 'energetic-hiphop-skilsel.mp3')

song8 = Song.create!(title: "Alluringly Beautiful", artist: "Nesrality", genre: 'Jazz', uploader_id: user2.id)
image8 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/jazz-singer.jpg')
song8.image_file.attach(io: image8, filename: 'jazz-singer.jpg')
sound8 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/alluringly-beautiful-nesrality.mp3')
song8.audio_file.attach(io: sound8, filename: 'alluringly-beautiful-nesrality.mp3')

song9 = Song.create!(title: "Journey End", artist: "Purrple Cat", genre: 'Study', uploader_id: user3.id)
image9 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/coffee.jpg')
song9.image_file.attach(io: image9, filename: 'coffee.jpg')
sound9 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/journey-end.mp3')
song9.audio_file.attach(io: sound9, filename: 'journey-end.mp3')

song10 = Song.create!(title: "Def", artist: "KingBeatz", genre: 'Trap', uploader_id: user3.id)
image10 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/wall-art.jpg')
song10.image_file.attach(io: image10, filename: 'wall-art.jpg')
sound10 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/def-kingbeatz.mp3')
song10.audio_file.attach(io: sound10, filename: 'def-kingbeatz.mp3')

song11 = Song.create!(title: "Sonata KV 331", artist: "Mozart", genre: 'Classical', uploader_id: user3.id)
image11 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/mozart-bear.jpg')
song11.image_file.attach(io: image11, filename: 'mozart-bear.jpg')
sound11 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/sonata-kv-331-mozart.mp3')
song11.audio_file.attach(io: sound11, filename: 'sonata-kv-331-mozart.mp3')

song12 = Song.create!(title: "Mo Baby", artist: "ETRNLPRODUCER", genre: 'Hip Hop', uploader_id: user3.id)
image12 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/hiphop-artist.jpg')
song12.image_file.attach(io: image12, filename: 'hiphop-artist.jpg')
sound12 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/mo-baby-etrnlproducer.mp3')
song12.audio_file.attach(io: sound12, filename: 'mo-baby-etrnlproducer.mp3')

song13 = Song.create!(title: "Bop Things", artist: "Nesrality", genre: 'Jazz', uploader_id: user4.id)
image13 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/jazz-artist.jpg')
song13.image_file.attach(io: image13, filename: 'jazz-artist.jpg')
sound13 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/bop-things-nesrality.mp3')
song13.audio_file.attach(io: sound13, filename: 'bop-things-nesrality.mp3')

song14 = Song.create!(title: "Floating Castle", artist: "Purrple Cat", genre: 'Study', uploader_id: user4.id)
image14 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/meditation.jpg')
song14.image_file.attach(io: image14, filename: 'meditation.jpg')
sound14 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/purrple-cat-floating-castle.mp3')
song14.audio_file.attach(io: sound14, filename: 'purrple-cat-floating-castle.mp3')

song15 = Song.create!(title: "Explosive Trap Beat", artist: "Defekt Machine", genre: 'Trap', uploader_id: user4.id)
image15 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/astronaut-art.jpg')
song15.image_file.attach(io: image15, filename: 'astronaut-art.jpg')
sound15 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/explosive-trap-beat-defekt-machine.mp3')
song15.audio_file.attach(io: sound15, filename: 'explosive-trap-beat-defekt-machine.mp3')

song16 = Song.create!(title: "Suite No 3", artist: "Bach", genre: 'Classical', uploader_id: user5.id)
image16 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/piano.jpg')
song16.image_file.attach(io: image16, filename: 'piano.jpg')
sound16 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/suite-no-3-bach.mp3')
song16.audio_file.attach(io: sound16, filename: 'suite-no-3-bach.mp3')

song17 = Song.create!(title: "Raise Your Glass", artist: "PhantasticBeats", genre: 'Hip Hop', uploader_id: user5.id)
image17 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/microphone-man.jpg')
song17.image_file.attach(io: image17, filename: 'astronaut-art.jpg')
sound17 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/raise-your-glass-phantasticbeats.mp3')
song17.audio_file.attach(io: sound17, filename: 'raise-your-glass-phantasticbeats.mp3')

song18 = Song.create!(title: "Jazz It Up", artist: "Caffeine Creek Band", genre: 'Jazz', uploader_id: user5.id)
image18 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/saxophone.jpg')
song18.image_file.attach(io: image18, filename: 'saxophone.jpg')
sound18 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/jazz-it-up-caffeine-creek-band.mp3')
song18.audio_file.attach(io: sound18, filename: 'jazz-it-up-caffeine-creek-band.mp3')

song19 = Song.create!(title: "Silent Wood", artist: "Purrple Cat", genre: 'Study', uploader_id: user6.id)
image19 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/moon.jpg')
song19.image_file.attach(io: image19, filename: 'moon.jpg')
sound19 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/silent-wood.mp3')
song19.audio_file.attach(io: sound19, filename: 'silent-wood.mp3')

song20 = Song.create!(title: "Intro Music", artist: "Black Box", genre: 'Trap', uploader_id: user6.id)
image20 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/last-art.jpg')
song20.image_file.attach(io: image20, filename: 'last-art.jpg')
sound20 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/intro-music-blackbox.mp3')
song20.audio_file.attach(io: sound20, filename: 'intro-music-blackbox.mp3')

song21 = Song.create!(title: "Symphony No 40", artist: "Mozart", genre: 'Classical', uploader_id: user7.id)
image21 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/violin.jpg')
song21.image_file.attach(io: image21, filename: 'violin.jpg')
sound21 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/symphony-No-40-mozart.mp3')
song21.audio_file.attach(io: sound21, filename: 'symphony-No-40-mozart.mp3')

song22 = Song.create!(title: "Resolve", artist: "NbeatMusic", genre: 'Hip Hop', uploader_id: user8.id)
image22 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/car-art.jpg')
song22.image_file.attach(io: image22, filename: 'car-art.jpg')
sound22 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/resolve-nbeatmusic.mp3')
song22.audio_file.attach(io: sound22, filename: 'resolve-nbeatmusic.mp3')

song23 = Song.create!(title: "Quando", artist: "Julius H", genre: 'Jazz', uploader_id: user9.id)
image23 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/sax-man.jpg')
song23.image_file.attach(io: image23, filename: 'sax-man.jpg')
sound23 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/quando-juliush.mp3')
song23.audio_file.attach(io: sound23, filename: 'quando-juliush.mp3')

song24 = Song.create!(title: "Travel To The City", artist: "Lesfm", genre: 'Study', uploader_id: user10.id)
image24 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/studying.jpg')
song24.image_file.attach(io: image24, filename: 'studying.jpg')
sound24 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/travel-to-the-city-lesfm.mp3')
song24.audio_file.attach(io: sound24, filename: 'travel-to-the-city-lesfm.mp3')

song25 = Song.create!(title: "Knockout Blow", artist: "AleXZavesa", genre: 'Trap', uploader_id: user10.id)
image25 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/trap-art.jpg')
song25.image_file.attach(io: image25, filename: 'trap-art.jpg')
sound25 = URI.open('https://music-nimbus-seeds.s3.amazonaws.com/knockout-blow.mp3')
song25.audio_file.attach(io: sound25, filename: 'knockout-blow.mp3')