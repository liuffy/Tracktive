json.array! @tracktlists do |tracktlist|
  json.extract! tracktlist, :id, :title, :index_image_url, :username
end