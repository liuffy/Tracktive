:user = User.find(tracktlist.user_id)
json.extract! tracktlist, :id, :title, :artists, :playlistUrl, :index_image_url, :created_at, :user_id, :username
