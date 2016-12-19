json.extract! user, :id, :username
json.likedTracktlists user.liked_tracktlists.map {|tracktlist| tracktlist.id}
