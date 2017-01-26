import {connect} from 'react-redux';
import TracktlistIndexItem from './tracktlist_index_item';


const mapStateToProps = (state, ownProps) => ({
  tracktlist: ownProps.tracktlist
});



export default connect(
	mapStateToProps)(
	TracktlistIndexItem);