class User < ActiveRecord::Base

	attr_reader :password 

	validates :password_digest, :session_token, presence: true 
	validates :username, uniqueness: true 
	validates :password, length: {minimum: 6, allow_nil: true}
	after_initialize :ensure_session_token

	has_many :tracktlists, inverse_of: :user
	has_many :likes, 
					 class_name: "Likes", 
					 foreign_key: "liker_id"

	def self.find_by_credentials(username, password)
		@user = User.find_by_username(username)

		return @user if (@user && @user.is_password?(password))
		return nil
	end 

	def password=(password) 
		@password = password
		self.password_digest = BCrypt::Password.create(password)
	end 

	def generate_session_token
		SecureRandom::urlsafe_base64
	end 

	def reset_session_token!
		self.session_token = generate_session_token 
		self.save! 
		self.session_token  
	end 

	def is_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end 

	private 

	def ensure_session_token
		self.session_token ||= generate_session_token
	end 

end 