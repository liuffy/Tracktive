const _defaultError = data => console.log(data);


export const fetchUser = (id, success, error = _defaultError) => {
  $.ajax({
  method: 'GET',
  url: `api/users/${id}`,
  success,
  error
  });
};