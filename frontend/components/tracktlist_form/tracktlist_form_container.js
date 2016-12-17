import {connect} from 'react-redux';
import TracktlistForm from './tracktlist_form';
import {getArtists, 
				getAlbums, 
				getTracks, 
        createTracktlist} from '../../actions/tracktlist_actions';

const mapStateToProps = (state) =>({
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getArtists: artistNames => dispatch(getArtists(artistNames)),
  getAlbums: artistIds => dispatch(getAlbums(artistIds)),
  getTracks: albumIds => dispatch(getTracks(albumIds)),
  createTracktlist: (artistNames, title, imageUrl) => dispatch(createTracktlist(artistNames, title, imageUrl))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(TracktlistForm)