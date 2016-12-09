import React from 'react';
import {Link} from 'react-router';

const Greeting = ({currentUser, logout}) => {

	if (currentUser){
		return (
			<div>
				<span className="greeting">Welcome, {currentUser.username}!</span>
				<button 
					className="standard-button"
					onClick={logout}>Logout</button>
			</div>
				)
	} else {
			return (
				<div>
					<p>
						<Link 
						className="standard-button"
						to={'/login'}>Login</Link> 

						<Link 
						className="standard-button"
						to={'/signup'}>Signup</Link>
					</p>
				</div>
				)
	}
}

export default Greeting;