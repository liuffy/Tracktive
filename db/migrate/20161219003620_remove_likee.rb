class RemoveLikee < ActiveRecord::Migration
  def change
  	remove_column :likes, :likee_id, :integer
  	change_column_null(:likes, :tracktlist_id, false)
  end
end
