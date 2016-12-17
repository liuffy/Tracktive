import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import UsersReducer from './users_reducer';
import TracktlistReducer from './tracktlist_reducer';

const RootReducer = combineReducers({
	session: SessionReducer,
	users: UsersReducer,
	tracktlists: TracktlistReducer
})

export default RootReducer;