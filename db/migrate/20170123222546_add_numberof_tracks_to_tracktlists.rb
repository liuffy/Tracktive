class AddNumberofTracksToTracktlists < ActiveRecord::Migration
  def change
	  	add_column :tracktlists, :num_tracks, :integer
  end
end
