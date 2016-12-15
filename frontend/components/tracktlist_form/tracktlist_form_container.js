import {connect} from 'react-redux';
import TracktlistForm from './tracktlist_form';
import {createPlaylist} from '../../actions/tracktlist_actions';

const mapStateToProps = (state) =>({
	currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => {
  getArtists = (artistNames) => dispatch(getArtists(artistNames)),
  getAlbums = (artistIds) => dispatch(getAlbums(artistIds)),
  getTracks = (albumIds) => dispatch(getTracks(albumIds)),
  getRandomTracks = (randomTracks) => dispatch(getRandomTracks(randomTracks)),
  createPlaylist = (randomIds) => dispatch(createPlaylist(randomIds))
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(TracktlistForm)