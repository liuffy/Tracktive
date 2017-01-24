 import { REQUEST_TRACKTLIST, 
 					// REQUEST_TRACKTLISTS,
 					// RECEIVE_TRACKTLISTS
 					RECEIVE_TRACKTLIST
 				} from '../actions/tracktlist_actions';


const initialState = {
	indexLoading: false,
	detailLoading:false
}
const loadingReducer = (state = initialState, action) => {
 	Object.freeze(state);
 	let dupState = {};

 	switch(action.type){
 		case REQUEST_TRACKTLIST:
 		 	return Object.assign({}, state, { detailLoading: true });
 		// case RECEIVE_TRACKTLISTS:
 		case RECEIVE_TRACKTLIST:
 			return initialState;
 		// case REQUEST_TRACKTLISTS:
 		// 	return Object.assign({}, state, { indexLoading: true });

 		default:
 			return state;
 	}
 }


export default loadingReducer;