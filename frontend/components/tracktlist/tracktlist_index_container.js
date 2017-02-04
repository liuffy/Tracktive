import {connect} from 'react-redux';
import TracktlistIndex from './tracktlist_index';
import {fetchTracktlists} from '../../actions/tracktlist_actions';
import {selectAllTracktlists} from '../../reducers/selectors';
// import {requestUserPlaylists} from '../../actions/playlist_actions';

const mapStateToProps = (state) => ({
	tracktlists: selectAllTracktlists(state),
  currentUser: state.session.currentUser,
  loading: state.loading.indexLoading,
  query: state.query
});

const mapDispatchToProps = (dispatch) => ({
	fetchTracktlists: () => dispatch(fetchTracktlists())
})

export default connect(
	mapStateToProps, 
	mapDispatchToProps)(
	TracktlistIndex);