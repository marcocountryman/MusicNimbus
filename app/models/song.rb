class Song < ApplicationRecord
    validates :title, :artist, :genre, presence:true
    validates :genre, inclusion: { in: ['Trap', 'Study', 'Jazz', 'Classical', 'Hip Hop'] }

    # validate :ensure_image
    # validate :ensure_audio
    
    has_one_attached :image_file
    has_one_attached :audio_file

    belongs_to :uploader,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :User

    has_many :comments,
    primary_key: :id,
    foreign_key: :commenter_id,
    class_name: :Comment,
    dependent: :destroy

    # def ensure_image
    #     unless self.image_file.attached?
    #         errors[:image_file] << "must have image file"
    #     end
    # end

    # def ensure_audio
    #     unless self.audio_file.attached?
    #         errors[:audio_file] << "must have audio file"
    #     end
    # end
end
