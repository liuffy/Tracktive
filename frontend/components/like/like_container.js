import {connect} from 'react-redux';
import Like from './like';
import {createLike, deleteLke} from '../../actions/like_actions';

const mapStateToProps = (state, {session}) => {
	let likedTracktlists = session.currentUser.likedTracktlists;
	let tracktlistId = state.tracktlist.id;
	let currentUserId = session.currentUser.id

	return {
		likedTracktlists,
		currentTracktlistId,
		currentUserId
	};
}

const mapDispatchToProps = (dispatch) => ({
	createLike: (id) => dispatch(createLike(id)),
	deleteLike: (id) => dispatch(deleteLike(id))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(Like)