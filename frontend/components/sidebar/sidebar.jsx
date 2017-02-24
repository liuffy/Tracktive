import React from 'react';
import {Link, withRouter} from 'react-router';

const Sidebar = ({currentUser}) => (

			<div className="sidebar">
					<button><Link 
					className="sidebar-button"
					activeClassName="active-button-side"
					to={'/browse'}>EXPLORE</Link></button>

					<button><Link 
					className="sidebar-button"
					activeClassName="active-button-side"
					to={'/tracktlists/new'}>CREATE</Link></button>

					<button><Link 
					className="sidebar-button"
					activeClassName="active-button-side"
					to={`/users/${currentUser.id}`}>MY &#9836;</Link></button>
			</div>
		

)

export default withRouter(Sidebar);

