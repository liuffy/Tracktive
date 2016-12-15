const _defaultError = data => console.log(data);
const _defaultSuccess = data => console.log(data);

export const getArtists = (artist, error = _defaultError) => 
	$.ajax({
		url: 'https://api.spotify.com/v1/search',
		method: 'GET',
		dataType: 'json',
		data: {
			type: 'artist',
			q: artist
		},
		error
	});

export const getArtistsAlbums = (id, error = _defaultError) => 
	$.ajax({
		url: `https://api.spotify.com/v1/artists/${id}/albums`,
		method: 'GET',
		dataType: 'json',
		data: {
			album_type: 'album',
		},
		error
	});

export const getAlbumTracks = (id, error = _defaultError) => 
	$.ajax({
		url: `https://api.spotify.com/v1/albums/${id}/tracks`,
		method: 'GET',
		dataType: 'json',
		error
	});

////////////////////////////////////////////////


export const fetchTracktlists = () => {
	return $.ajax({
		method: 'GET',
		url: '/api/tracktlists'
		 // makes an AJAX request that will make a http request to the tracktlistsController#index endpoint
	})
}


export const fetchTracktlist = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/tracktlists/${id}`
  });
};

export const createTracktlist = (tracktlist, error = defaultError) => {
  return $.ajax({
    method: 'POST',
    url: '/api/tracktlists',
    data: {tracktlist},
    error
  });
};