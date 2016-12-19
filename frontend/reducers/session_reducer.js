import {RECEIVE_CURRENT_USER, 
				RECEIVE_ERRORS,
				RECEIVE_LIKE,
				REMOVE_LIKE} from '../actions/session_actions';

const _nullUser = Object.freeze({
	currentUser: {likedTracktlists: []},
	errors: []
})

const SessionReducer = (state = _nullUser, action) =>{
	Object.freeze(state);

	switch(action.type){
		case RECEIVE_CURRENT_USER:
			const currentUser = action.currentUser;
			return Object.assign({}, _nullUser, {currentUser})

		case RECEIVE_ERRORS:
			const errors = action.errors;
			return Object.assign({}, _nullUser, {errors})

		case RECEIVE_LIKE:
			let dupState = Object.assign({}, state);
			dupState.currentUser.likedTracktlists.push(parseInt(action.like.tracktlistId));
			return currentUser;

		case REMOVE_LIKE:
			dupState = Object.assign({}, state);
			const removedLike = action.like;
			const removeIdx = dupState.currentUser.likedTracktlists.indexOf(removedLike.tracktlistId)
		  dupState.currentUser.likedTracktlists.splice(removeIdx, 1); // removes like from array
			return currentUser;

		default:
			return state;
	}
}

export default SessionReducer;