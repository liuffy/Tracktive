import * as APIUtil from '../util/tracktlist_api_util';

// const getDataObject = arr => arr[0].items;

export function getArtists(artist) {

	// get the results of gelling getArtists
	// grab the first (most relevent result) result's id 
	return (dispatch) =>{
		return APIUtil.getArtists(artist)
			.then((...results) => {
				results = results.map((res) => res.artists.items[0]);
				console.log(results);
			})
				// getAlbums(artists);
			}
	}

// export function getAlbums(artists) {
// 	let albums = artists.map(artist => APIUtil.getArtistsAlbums(artist.id));
// 		.then((...albums) => {
// 			let albumIds = albums
// 				.map(a => a[0].items).reduce((prev,curr) => [...prev,...curr] ,[])
// 				.map(album => app.getAlbumTracks(album.id));

// 			getTracks(albumIds);
// 		});
// };

// export function getTracks(tracks) {
// 		let tracks = tracks
// 			.map(getDataObject)
// 			.reduce((prev,curr) => [...prev,...curr],[]);	
// 		const randomPlayList = getRandomTracks(50,tracks);
// 		createPlayList(randomPlayList);
// 	}
// };

// export function createPlaylist(tracks){

// }

// export function createTracktlist(artist) {
// 	return (dispatch) => {
// 		return APIUtil.getArtist(artist)
// 		.then(artistId => dispatch(APIUtil.getArtistsAlbums(artistId));
// 			.then(album => dispatch(APIUtil.getAlbumTracks(album))
// 			return bench})
// 	}
