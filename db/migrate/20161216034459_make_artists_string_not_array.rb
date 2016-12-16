class MakeArtistsStringNotArray < ActiveRecord::Migration
  def change
  	change_column :tracktlists, :artists, :string, null: false, array: false
  end
end
