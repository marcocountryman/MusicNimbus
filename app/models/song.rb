class Song < ApplicationRecord
    validates :title, :artist_name, :genre, presence:true
    validates :genre, inclusion: { in: ['Hype', 'Study', 'Jazz', 'Anime', 'Classical'] }

    has_one_attached :image
    has_one_attached :audio

    belongs_to :uploader,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :User
end