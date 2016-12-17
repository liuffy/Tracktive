import { connect } from 'react-redux';
import { fetchTracktlist } from '../../actions/tracktlist_actions';
import {selectTracktlist} from '../../reducers/selectors';
import TracktlistShow from './tracktlist_show';

const mapStateToProps = (state, { params }) =>{
	const tracktlistId = parseInt(params.tracktlistId);
  const tracktlist = selectTracktlist(state, tracktlistId);
  return {
    tracktlistId,
    tracktlist
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTracktlist: id => dispatch(fetchTracktlist(id))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(TracktlistShow)