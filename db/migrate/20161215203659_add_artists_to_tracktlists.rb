class AddArtistsToTracktlists < ActiveRecord::Migration
  def change
  	add_column :tracktlists, :artists, :string, array: true, null: false
  end
end
