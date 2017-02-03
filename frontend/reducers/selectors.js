import _ from 'lodash';

export const selectUser = ({ users }, id) => {
   const user = users[id] || {};
   return user
 }

export const selectAllTracktlists = state => _.values(state.tracktlists);


export const selectTracktlist = ({ tracktlists }, id) =>{
	const tracktlist = tracktlists[id] || {};
	return tracktlist
}

function belongsToUser (tracktlist, state) {
  return tracktlist.username === state.session.currentUser.username;
}


export const selectUserTracktlists = ({tracktlists}) => tracktlists.filter(belongsToUser);
