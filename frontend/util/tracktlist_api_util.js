const _defaultError = data => console.log(data);
const _defaultSuccess = data => console.log(data);

export const fetchTracktlists = () => {
	return $.ajax({
		method: 'GET',
		url: '/api/tracktlists'
	})
}


export const fetchTracktlist = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/tracktlists/${id}`
  });
};

export const createTracktlist = (tracktlist, error = _defaultError) => {
  return $.ajax({
    method: 'POST',
    url: '/api/tracktlists',
    data: {tracktlist},
    error
  });
};