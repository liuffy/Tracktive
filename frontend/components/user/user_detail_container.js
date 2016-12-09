import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { selectUser} from '../../reducers/selectors';
import UserDetail from './user_detail';


const mapStateToProps = (state, { params }) => {
 const userId = parseInt(params.userId);
  const user = selectUser(state, userId);
  return {
    userId,
    user
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail);