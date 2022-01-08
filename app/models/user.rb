# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  age             :integer          not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  displayname     :string           not null
#
class User < ApplicationRecord
    
    validates :email, :displayname, :age, :session_token, :password_digest, presence:true
    validates :email, uniqueness:true
    validates :password, length: {minimum: 8}, allow_nil:true
    validates :displayname, length: {maximum:16}

    attr_reader :password
    after_initialize :ensure_session_token

    has_one_attached :photo

    has_many :songs,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :Song


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end
end
