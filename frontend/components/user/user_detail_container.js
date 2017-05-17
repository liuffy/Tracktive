import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { selectUser} from '../../reducers/selectors';
import { fetchTracktlists } from '../../actions/tracktlist_actions';
import { selectAllTracktlists } from '../../reducers/selectors';
import UserDetail from './user_detail';


const mapStateToProps = (state, { params }) => {

	const userId = parseInt(params.userId);
	const user = selectUser(state, userId);
	  return {
			tracktlists: selectAllTracktlists(state),
      currentUser: state.session.currentUser,
	    userId,
	    user,
	  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
	fetchTracktlists: () => dispatch(fetchTracktlists())

}); 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail);