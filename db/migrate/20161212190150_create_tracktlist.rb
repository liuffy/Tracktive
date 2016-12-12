class CreateTracktlist < ActiveRecord::Migration
  def change
    create_table :tracktlists do |t|
    	t.string :title, null: false
    	t.integer :user_id, null: false
    	t.string :index_image_url, null: false

    	t.timestamps null: false
    end

    add_index :tracktlists, :user_id
  end
end
