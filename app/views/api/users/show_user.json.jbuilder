json.extract! @user, :username, :id, :created_at

json.createdTracktlists @user.tracktlists
json.likedTracktlists @user.liked_tracktlists