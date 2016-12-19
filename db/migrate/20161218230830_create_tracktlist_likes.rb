class CreateTracktlistLikes < ActiveRecord::Migration
 def change
    create_table :likes do |t|
      t.integer :likee_id, null: false
      t.integer :liker_id, null: false

      t.timestamps
    end

    add_index :likes, :likee_id
    add_index :likes, :liker_id
    add_index :likes, [:likee_id, :liker_id], unique: true
  end
end
