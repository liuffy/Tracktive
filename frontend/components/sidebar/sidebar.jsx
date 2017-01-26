import React from 'react';
import {Link, withRouter} from 'react-router';

const Sidebar = ({currentUser}) => (

	// if (currentUser){
	// 	return
	// 	(
			<div className="sidebar">
					<button><Link 
					className="sidebar-button"
					activeClassName="active-button"
					to={'/search'}>explore</Link></button>

					<button><Link 
					className="sidebar-button"
					activeClassName="active-button"
					to={'/tracktlists/new'}>create</Link></button>

					<button><Link 
					activeClassName="active-button"
					className="sidebar-button"
					to={'/mine'}>my &#9836;</Link></button>
			</div>
		
	// 	)
	// } else {
	// 	return (
	// 		<div>but why</div>
	// 		)
	// }
)

export default Sidebar;

