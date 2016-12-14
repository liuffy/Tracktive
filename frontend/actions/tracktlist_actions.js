import * as APIUtil from '../util/tracktlist_api_util';

const getObjectId = results => results.items.map(item =>item.id)

export function getArtists(artist) {

	// get the results of gelling getArtists
	// grab the first (most relevent result) result's id 
	return (dispatch) =>{
		// let artists = artist.split(',')
		return APIUtil.getArtists(artist)
			.then((results) => {
				let artistId = results.artists.items[0].id;
				 dispatch(getAlbums(artistId));
				})
			}
	}

export function getAlbums(artistId) {
	return (dispatch) =>{
		return APIUtil.getArtistsAlbums(artistId)
		.then((results)  => {
			let albumIds = getObjectId(results)
			// console.log(albumIds)
			dispatch(getTracks(albumIds))
		})
	}
}


// take the bunch of album Ids
// for each album ID, invoke getAlbumTracks and push the result to allTracks 


export function getTracks(albumIds) {
	return (dispatch) =>{
		const allTracks = []
		let mergedTracks = []

		for (var i = 0; i < albumIds.length; i++) {
				let curr = i
	  	APIUtil.getAlbumTracks(albumIds[i])
				.then( results => {
					let trackIds = getObjectId(results)
					allTracks.push(trackIds)

					if (curr === albumIds.length - 1) {
						mergedTracks = [].concat.apply([], allTracks);
						console.log(mergedTracks)
						dispatch(getRandomTracks(mergedTracks))
					}
				})
		}
	}
}


export function getRandomTracks(tracks) {
	return (dispatch) => {
		const randomResults = [];
		for(let i = 0; i < 10; i++) {
			randomResults.push(tracks[ Math.floor(Math.random() * tracks.length)])
		}
		console.log(randomResults)
		dispatch(createPlaylist(randomResults))
	}
}


export function createPlaylist(randomIds){
	return (dispatch) => {
		const baseUrl = 'https://embed.spotify.com/?theme=white&uri=spotify:trackset:My Playlist:'
		const playlistUrl = `${baseUrl+randomIds}` // the playlistUrl assembled 
		console.log(playlistUrl);
	}
}
