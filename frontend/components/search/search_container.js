import { connect } from 'react-redux';
import { search } from '../../actions/search_actions';
import Search from './search';

const mapStateToProps = (state) =>({
	query: state.query;
});

const mapDispatchToProps = dispatch => ({
	fetchTracktlists: () => dispatch(fetchTracktlists())
	search: (query) => dispatch(search(query))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search);