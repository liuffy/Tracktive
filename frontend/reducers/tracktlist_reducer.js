import {RECEIVE_TRACKTLISTS, RECEIVE_TRACKTLIST} from '../actions/tracktlist_actions';

const TracktlistReducer = (state= {}, action) =>{
	Object.freeze(state);

	switch(action.type) {
		case RECEIVE_TRACKTLIST:
			return action.tracktlists;
		case RECEIVE_TRACKTLIST:
			return Object.assign({}, state, {
				[action.tracktlist.id]: action.tracktlist
			})
		default:
			return state;
	}
}

export default TracktlistReducer;