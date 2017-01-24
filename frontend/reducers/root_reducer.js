import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import UsersReducer from './users_reducer';
import TracktlistReducer from './tracktlist_reducer';
import loadingReducer from './loading_reducer';

const RootReducer = combineReducers({
	session: SessionReducer,
	users: UsersReducer,
	tracktlists: TracktlistReducer,
	loading: loadingReducer
})

export default RootReducer;