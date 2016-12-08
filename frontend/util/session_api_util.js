const defaultError = data => console.log(data);

export const signup = (user, error = defaultError) => {
	return $.ajax({
		method: 'POST',
		url: 'api/users',
		dataType: 'json',
		data: {user},
		error
	})
}

export const login = (user, error = defaultError) => {
	return $.ajax({
    method: 'POST',
    url: 'api/session',
    dataType:'json',
    data:{user},
    error
  });
}

export const logout = () => {
	return $.ajax({
    method: 'DELETE',
    url: 'api/session',
    dataType:'json'
  });
}