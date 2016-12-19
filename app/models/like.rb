class Like < ActiveRecord::Base
	belongs_to :tracktlist, class_name: "Tracktlist"
  belongs_to :liker, class_name: "User"

  validates :tracktlist_id, :liker_id, presence: true
  validates :liker_id, uniqueness: { scope: :tracktlist_id }
end 