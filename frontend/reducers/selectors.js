
export const selectUser = ({ users }, id) => {
   const user = users[id] || {};
   return user
 }


export const selectTracktlist = ({ tracktlists }, id) =>{
	const tracktlist = tracktlists[id] || {};
	return tracktlist
}