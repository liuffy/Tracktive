export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REQUEST_LIKE = "REQUEST_LIKE";
export const RECEIVE_LIKES = "RECEIVE_LIKES";
// export const REQUEST_LIKES = "REQUEST_LIKES";
export const REMOVE_LIKE = "REMOVE_LIKE";

import * as APIUtil from '../util/like_api_util';

export function fetchLike(id){
	return (dispatch) => {
		dispatch(requestLike());
		return APIUtil.fetch(id).then(like => {
			dispatch(receiveLike(like))
			return like;
		});
	}
}

export function fetchLikes(){
	return (dispatch) => {
    return APIUtil.fetchLikes() // calls the APIUtil 
      .then(likes => dispatch(receiveLikes(likes)));
  }
}
// 
export function createLike(id){
	return (dispatch) => {
		return APIUtil.createLike(like)
		.then(like => {dispatch(receiveLike(like));return like})
	}
}

export function deleteLike(id){
	return (dispatch) => {
			dispatch(requestLike());
			return APIUtil.fetch(id).then(like => {
				dispatch(removeLike(like))
				return like;
			});
		}
}

// export const requestLikes = () => ({
// 	type: REQUEST_LIKES
// })



export const receiveLikes = likes => ({
  type: RECEIVE_LIKES,
  likes
});

export const requestLike = () => ({
	type: REQUEST_LIKE
})

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});


