class Tracktlist < ActiveRecord::Base
	validates :title, :user_id, :username, :index_image_url, :artists, :playlistUrl, presence: true

	belongs_to :user, inverse_of: :tracktlists, foreign_key: :creator
	after_initialize :ensure_index_image

	DEFAULT_IMAGES = [
		'http://res.cloudinary.com/liuffy/image/upload/v1481571133/index_images/minimal1.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571133/index_images/minimal2.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571133/index_images/minimal3.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571133/index_images/minimal4.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571135/index_images/minimal5.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571135/index_images/minimal6.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571135/index_images/minimal7.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571135/index_images/minimal8.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571135/index_images/minimal9.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571135/index_images/minimal10.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571135/index_images/minimal11.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571135/index_images/minimal12.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571135/index_images/minimal13.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571135/index_images/minimal14.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571136/index_images/minimal15.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571136/index_images/minimal16.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571136/index_images/minimal17.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571136/index_images/minimal18.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571136/index_images/minimal20.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571136/index_images/minimal21.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571136/index_images/minimal22.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571136/index_images/minimal23.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571136/index_images/minimal24.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571137/index_images/minimal25.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571137/index_images/minimal26.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571137/index_images/minimal27.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571137/index_images/minimal29.jpg',
		'http://res.cloudinary.com/liuffy/image/upload/v1481571133/index_images/minimal30.jpg'
	]

	private

	def ensure_index_image
		self.index_image_url ||= DEFAULT_IMAGES[rand(28)]
	end 

end 