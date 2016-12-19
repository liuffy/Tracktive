export const RECEIVE_TRACKTLISTS = "RECEIVE_TRACKTLISTS";
export const RECEIVE_TRACKTLIST = "RECEIVE_TRACKTLIST";
export const REQUEST_TRACKTLIST = "REQUEST_TRACKTLIST";
export const CREATE_TRACKTLIST = "CREATE_TRACKTLIST";
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
					const numberOfTracks = artistNamesArr.length > 2 ? artistNamesArr.length * 4 : 10;
					const subsetOfTracks = tracks.slice(0, numberOfTracks);
					const state = getState();
					const baseUrl = `https://embed.spotify.com/?theme=white&uri=spotify:trackset:${title}:`;
					const playlistUrl = `${baseUrl}${subsetOfTracks}`;
					const user_id = state.session.currentUser.id;

					APIUtil.createTracktlist({
						playlistUrl,
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
