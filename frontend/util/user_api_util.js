const _defaultError = data => console.log(data);


export const fetchUser = (id) => {
  return $.ajax({
  method: 'GET',
  url: `api/users/${id}`,
  });
};