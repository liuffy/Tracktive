class AddPlaylisturlToTracktlists < ActiveRecord::Migration
  def change
  	add_column :tracktlists, :playlistUrl, :string
  end
end
