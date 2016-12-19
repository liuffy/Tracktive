import {RECEIVE_TRACKTLISTS, 
				RECEIVE_TRACKTLIST,
				SET_CURRENT_ID} from '../actions/tracktlist_actions';

let _nullTracktlist = Object.freeze({
	tracktlist: {},
	currentTracktlist: {tracktlist: {}},
	// errors: [],
	currentTracktlistId: -1
	// playerOpen: false
});


const TracktlistReducer = (state= _nullTracktlist, action) =>{
	Object.freeze(state);

	switch(action.type) {
		case RECEIVE_TRACKTLISTS:
			return action.tracktlists;
		case RECEIVE_TRACKTLIST:
			return Object.assign({}, state, {
				[action.tracktlist.id]: action.tracktlist
			})

		case SET_CURRENT_ID:
			let dupState = Object.assign({}, state, {currentTracktlistId: action.tracktlistId});
			return newState;
		default:
			return state;
	}
}

export default TracktlistReducer;