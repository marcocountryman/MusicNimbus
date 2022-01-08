class Song < ApplicationRecord
    validates :title, :artist, :genre, presence:true
    validates :genre, inclusion: { in: ['Trap', 'Study', 'Jazz', 'Classical', 'Hip Hop'] }

    has_one_attached :image_file
    has_one_attached :audio_file

    belongs_to :uploader,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :User
end
