export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';

import * as APIUtil from '../util/user_api_util';

export function fetchUser(id) {
	return (dispatch) => {
		dispatch(requestUser());
		return APIUtil.fetchUser(id).then(user => {
			dispatch(receiveUser(user))
			return user;
		});
	}
}

export const requestUser = () => ({
	type: REQUEST_USER
})

export const receiveUser = (user) => ({
	type: RECEIVE_USER,
	user
})