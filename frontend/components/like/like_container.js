import {connect} from 'react-redux';
import Like from './like';
import {createLike, deleteLke} from '../../actions/like_actions';

const mapStateToProps = (state) => {
	let likedTracktlists = state.session.currentUser.likedTracktlists;
	let currentTracktlistId = state.currentTracktlist.id;
	let currentUserId = state.session.currentUser.id

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