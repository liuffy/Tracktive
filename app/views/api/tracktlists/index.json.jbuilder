json.array! @tracktlists do |tracktlist|
  json.extract! tracktlist, :id, :title, :index_image_url, :num_tracks, :username, :artists
end