export const RECEIVE_TRACKTLISTS = "RECEIVE_TRACKTLISTS";
export const RECEIVE_TRACKTLIST = "RECEIVE_TRACKTLIST";
export const REQUEST_TRACKTLIST = "REQUEST_TRACKTLIST";
export const CREATE_TRACKTLIST = "CREATE_TRACKTLIST";

import * as SpotifyAPIUtil from '../util/spotify_api_util'
import * as APIUtil from '../util/tracktlist_api_util';

const getObjectId = results => results.items.map(item =>item.id)

let tracklistLength = 10; // default tracklist length

export function getArtists(artists) {
		let artistNames = artists.split(',')
		tracklistLength = artistNames.length * 4; // length of tracktlist depends on number of artists inputted
	return (dispatch) =>{
		const allArtists = []
		let mergedArtists = []

		for (var i = 0; i < artistNames.length; i++){
			let curr = i
			SpotifyAPIUtil.getArtists(artistNames[i])
			.then ( results => {
				// grab the first (most relevent result) result's id 
				let artistIds = results.artists.items[0].id; 
					allArtists.push(artistIds)

				if (curr === artistNames.length - 1) {
					mergedArtists = [].concat.apply([], allArtists);
					// return mergedArtists
					// console.log(mergedArtists)
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
			SpotifyAPIUtil.getArtistsAlbums(artistIds[i])
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

		// Grab all tracks from each of the albums
		for (var i = 0; i < albumIds.length; i++) {
			let curr = i

	  	SpotifyAPIUtil.getAlbumTracks(albumIds[i]) // one last call to spotify API 
				.then( results => {

					let trackIds = getObjectId(results)
					allTracks.push(trackIds)

					// Flatten the allTracks array 
					if (curr === albumIds.length - 1) {
						mergedTracks = [].concat.apply([], allTracks); // so that's no longer a nested array

					if (tracklistLength < 10){
						tracklistLength = 10 // Make sure minimum tracklistlength is 10
					}

					// Pick 10 random track Ids for the tracklist
					const randomTrackIds = [];
					for(let i = 0; i < tracklistLength; i++) { // Grab 10+ random tracks 
						randomTrackIds.push(mergedTracks[ Math.floor(Math.random() * mergedTracks.length)])
					}
					
					// Make a playlist using the trackIds
					const baseUrl = 'https://embed.spotify.com/?theme=white&uri=spotify:trackset:My Tracktlist:'
					const playlistUrl = `${baseUrl+randomTrackIds}` 
					console.log(playlistUrl)
					return playlistUrl
					}
				})
		}
	}
}


//////////////////////////////////////////////////////////////////////////
export function createTracktlist(tracktlist){ 
		return (dispatch) => {
		dispatch(APIUtil.createTracktlist(tracktlist))
				.then(tracktlist => dispatch(APIUtil.receiveTracktlist(tracktlist)))
	}
}

//////////////////////////////////////////////////////////////////////////

export function fetchTracktlists() { // All tracktlists
  return (dispatch) => {
    // dispatch(requestTracktlists());
    return APIUtil.fetchTracktlists()
      .then(tracktlists => dispatch(receiveTracktlists(tracktlists)));
  }
}

export function fetchTracktlist(id) { // Single tracktlist
  return (dispatch) => {
    dispatch(requestTracktlist(id));
    return APIUtil.fetchTracktlist(id)
      .then(tracktlist => dispatch(receiveTracktlist(tracktlist)));
  }
}

export const requestTracktlist = () => ({
	type: REQUEST_TRACKTLIST
})

export const receiveTracktlists = tracktlists => ({
  type: RECEIVE_TRACKTLISTS,
  tracktlists
});

export const receiveTracktlist = tracktlist => ({
  type: RECEIVE_TRACKTLIST,
  tracktlist
});
