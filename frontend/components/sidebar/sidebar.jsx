import React from 'react';
import { Link, withRouter } from 'react-router';
import FormModal from '../modals/form_modal';


const Sidebar = ({currentUser}) => (

	<div>
			<ul className="fullscreen-sidebar">
					<li><Link 
					className="sidebar-button"
					activeClassName="active-button-side"
					to={'/browse'}>EXPLORE</Link></li>

					<li className="sidebar-button"><FormModal></FormModal></li>

					<li><Link 
					className="sidebar-button"
					activeClassName="active-button-side"
					to={`/users/${currentUser.id}`}>MINE</Link></li>
			</ul>

	<ul className="hamburger-dropdown"> 
		<li>
			<ul className="sidebar">
					<li><Link 
					className="sidebar-button ham"
					activeClassName="active-button-side"
					to={'/browse'}>EXPLORE</Link></li>

					<li className="sidebar-button ham"><FormModal></FormModal></li>

					<li><Link 
					className="sidebar-button ham"
					activeClassName="active-button-side"
					to={`/users/${currentUser.id}`}>MINE</Link></li>
			</ul>
		</li>
	</ul>
			</div>

)

export default withRouter(Sidebar);

