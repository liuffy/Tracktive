class AddUsernametoTracktlists < ActiveRecord::Migration
  def change
  	add_column :tracktlists, :username, :string
  end
end
