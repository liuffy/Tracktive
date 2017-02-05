export const RECEIVE_TRACKTLISTS = "RECEIVE_TRACKTLISTS";
export const RECEIVE_TRACKTLIST = "RECEIVE_TRACKTLIST";
export const REQUEST_TRACKTLIST = "REQUEST_TRACKTLIST";
export const REQUEST_TRACKTLISTS = "REQUEST_TRACKTLISTS";
export const CREATE_TRACKTLIST = "CREATE_TRACKTLIST";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const SET_CURRENT_ID = "SET_CURRENT_ID";

import * as SpotifyAPIUtil from '../util/spotify_api_util'
import * as APIUtil from '../util/tracktlist_api_util';
import flatMap from 'lodash/fp/flatMap';
import shuffle from 'lodash/fp/shuffle';

export function createTracktlist(artistNames, title, imageUrl) {
	return (dispatch, getState) => {
		const artistNamesArr = artistNames.split(',');

		const artistsData = Promise.all(artistNamesArr.map(SpotifyAPIUtil.getArtists)).then(artistData => {
			const artistIds = artistData.map(response => response.artists.items[0].id);
			
			Promise.all(artistIds.map(SpotifyAPIUtil.getArtistsAlbums)).then(albumData => {
				const albums = flatMap(album => album.items.map(item =>item.id), albumData);
				
				Promise.all(albums.map(SpotifyAPIUtil.getAlbumTracks)).then(trackData => {
					const tracks = shuffle(flatMap(track => track.items.map(item =>item.id), trackData));
					const num_tracks = artistNamesArr.length > 2 ? artistNamesArr.length * 4 : 10;
					const subsetOfTracks = tracks.slice(0, num_tracks);
					const state = getState();
					const baseUrl = `https://embed.spotify.com/?theme=white&uri=spotify:trackset:${title}:`;
					const playlistUrl = `${baseUrl}${subsetOfTracks}`;
					const user_id = state.session.currentUser.id;
					const username = state.session.currentUser.username;

					APIUtil.createTracktlist({
						num_tracks,
						playlistUrl,
						username,
						user_id,
						title,
						artists: artistNames,
						index_image_url: imageUrl
					}).then(tracktlist => 
						dispatch(receiveTracktlist(tracktlist))
					);
				})
			})
		});
	}
}
//////////////////////////////////////////////////////////////////////////

// export const requestUserTracktlists = (userId) => ({
//   type: REQUEST_USER_PLAYLISTS,
//   userId
// });


// export const receiveUserTracktlists = (tracktlists) => ({
//   type: RECEIVE_USER_TRACKTLISTS,
//   likedPlaylists: playlists.liked_playlists,
//   createdPlaylists: playlists.created_playlists
// });


export function fetchTracktlists() { // Fetch all tracktlists
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

export const requestTracktlists = () => ({
	type: REQUEST_TRACKTLISTS
	
})


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


export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
 type: CLEAR_ERRORS
});
