import React from 'react';
import {Link} from 'react-router';

const Sidebar = ({currentUser}) => (

	// if (currentUser){
	// 	return
	// 	(
			<div className="sidebar">
					<button><Link 
					className="sidebar-button"
					to={'/'}>explore</Link></button>

					<button><Link 
					className="sidebar-button"
					to={'/tracktlists/new'}>create</Link></button>

					<button><Link 
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

