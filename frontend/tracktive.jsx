import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import {signup, login, logout} from './actions/session_actions';
// import {getArtists, getArtistsAlbums, getAlbumTracks} from './util/tracktlist_api_util';
import {getArtists, getAlbums, getTracks} from './actions/tracktlist_actions';


document.addEventListener('DOMContentLoaded', () => {
	let store; 
	
	if (window.currentUser){ // This lets us stay logged in after a refresh
		const preloadedState = { session: {currentUser: window.currentUser}}
		store = configureStore(preloadedState);
	} else {
		store = configureStore();
	}

	// window.getArtistsAlbums = getArtistsAlbums;
	window.store = store;
	window.getArtists = getArtists;
	window.getAlbums = getAlbums;
	window.getTracks = getTracks;
	// window.getAlbumTracks = getAlbumTracks;
	// window.login = login;
	// window.logout = logout;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
