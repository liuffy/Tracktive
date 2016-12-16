class MakeArtistsString < ActiveRecord::Migration
  def change
  	change_column :tracktlists, :artists, :string, null: false
  end
end
