import {connect} from 'react-redux';
import TracktlistForm from './tracktlist_form';

const mapDispatchToProps = (dispatch) => {
  getArtists = (artists) => dispatch(getArtists(artists))
}

export default connect(
  null,
  mapDispatchToProps
  )(TracktlistForm)