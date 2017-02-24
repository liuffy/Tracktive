import React from 'react';
import {Link, withRouter} from 'react-router';
import FormModal from '../modals/form_modal';


const Sidebar = ({currentUser}) => (

			<div className="sidebar">
					<button><Link 
					className="sidebar-button"
					activeClassName="active-button-side"
					to={'/browse'}>EXPLORE</Link></button>

					<div className="sidebar-button"><FormModal></FormModal></div>

					<button><Link 
					className="sidebar-button"
					activeClassName="active-button-side"
					to={`/users/${currentUser.id}`}>MY &#9836;</Link></button>
			</div>
		

)

export default withRouter(Sidebar);

