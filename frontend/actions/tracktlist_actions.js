import * as APIUtil from '../util/tracktlist_api_util';

const getObjectId = results => results.items.map(item =>item.id)

export function getArtists(artists) {

	// get the results of gelling getArtists
	// grab the first (most relevent result) result's id 
	return (dispatch) =>{
		let artistNames = artists.split(',')
		console.log(artistNames)
		const allArtists = []
		let mergedArtists = []

		for (var i = 0; i < artistNames.length; i++){
			let curr = i
			APIUtil.getArtists(artistNames[i])
			.then ( results => {
				let artistIds = results.artists.items[0].id;
					allArtists.push(artistIds)

				if (curr === artistNames.length - 1) {
					mergedArtists = [].concat.apply([], allArtists);
					console.log(mergedArtists)
					dispatch(getAlbums(mergedArtists))
				}
			})
		}
	}
}

export function getAlbums(artistIds) {
	return (dispatch) =>{
		const allAlbums = []
		let mergedAlbums = []

		for (var i = 0; i < artistIds.length; i++){
			let curr = i
			APIUtil.getArtistsAlbums(artistIds[i])
			.then (results =>{
				let albumIds = getObjectId(results)
				allAlbums.push(albumIds)

				if (curr === artistIds.length - 1) {
					mergedAlbums = [].concat.apply([], allAlbums)
					// console.log(mergedAlbums)
					dispatch(getTracks(mergedAlbums))
				}
			})
		}
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
						// console.log(mergedTracks)
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
		// console.log(randomResults)
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
