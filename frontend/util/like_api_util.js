const _defaultError = data => console.log(data);
const _defaultSuccess = data => console.log(data);

export const fetchLikes= () => {
	return $.ajax({
		method: 'GET',
		url: '/api/likes'
		 // makes an AJAX request that will make a http request to the tracktlistsController#index endpoint
	})
}


export const fetchLike = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/likes/${id}`
  });
};

export const createLike = (like, error = _defaultError) => {
  return $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: {like},
    error
  });
};

export const deleteLike = (id, error = _defaultError) => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/likes',
    data: id,
    error
  });
};