import React from 'react';
import {Link, withRouter} from 'react-router';
import FormModal from '../modals/form_modal';


const Sidebar = ({currentUser}) => (

			<div className="sidebar">
					<div><Link 
					className="sidebar-button"
					activeClassName="active-button-side"
					to={'/browse'}>EXPLORE</Link></div>

					<div className="sidebar-button"><FormModal></FormModal></div>

					<div><Link 
					className="sidebar-button"
					activeClassName="active-button-side"
					to={`/users/${currentUser.id}`}>MINE</Link></div>
			</div>
		

)

export default withRouter(Sidebar);

