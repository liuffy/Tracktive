import {connect} from 'react-redux';
import TracktlistForm from './tracktlist_form';
import {getArtists, 
				getAlbums, 
				getTracks, 
				getRandomTracks, 
				concatPlaylistUrl,
        createTracktlist} from '../../actions/tracktlist_actions';

const mapStateToProps = (state) =>({
  // debugger
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  // debugger
  getArtists: artistNames => dispatch(getArtists(artistNames)),
  getAlbums: artistIds => dispatch(getAlbums(artistIds)),
  getTracks: albumIds => dispatch(getTracks(albumIds)),
  getRandomTracks: allTracks => dispatch(getRandomTracks(randomTracks)),
  concatPlaylistUrl: randomIds => dispatch(concatPlaylistUrl(randomIds)),
  createTracktlist: playlistUrl => dispatch(createTracktlist(playlistUrl))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(TracktlistForm)