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
		success:	(results) => {
				console.log(results.artists.items[0].id)
			}
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
