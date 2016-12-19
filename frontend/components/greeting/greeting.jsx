import React from 'react';
import {Link} from 'react-router';

const Greeting = ({currentUser, logout}) => {

	if (currentUser){
		return (
			<div className="greeting-container">
				<span className="greeting">hi again, <Link className="link" 
											to={`/users/${currentUser.id}`}>{currentUser.username}.</Link></span>
				<button 
					className="logout-button"
					onClick={logout}>logout</button>
			</div>
				)
	} else {
			return (
				<div className="greeting-container">
					<p>
						<Link 
						className="standard-button"
						to={'/login'}>login</Link> 

						<Link 
						className="standard-button"
						to={'/signup'}>signup</Link>
					</p>
				</div>
				)
	}
}

export default Greeting;