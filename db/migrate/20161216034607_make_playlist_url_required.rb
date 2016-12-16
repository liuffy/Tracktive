class MakePlaylistUrlRequired < ActiveRecord::Migration
  def change
  	change_column :tracktlists, :playlistUrl, :string, null: false
  end
end
