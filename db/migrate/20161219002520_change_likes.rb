class ChangeLikes < ActiveRecord::Migration
  def change
  	# remove_column :likes, :likee_id, :integer # don't care whose it is 
  	add_column :likes, :tracktlist_id, :integer # we what tracktlist is being liked
  	remove_index :likes, column: [:likee_id, :liker_id] # don't care whose
  	# it is
  	remove_index :likes, column: :likee_id # don't care whose it is
  	add_index :likes,[:tracktlist_id, :liker_id], unique: true # liker can only like
  	# likee once 
  end
end
