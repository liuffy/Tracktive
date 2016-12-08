import React from 'react';
import {Link} from 'react-router';

const Greeting = ({currentUser, logout}) => {

	if (currentUser){
		return (
			<div>
				Welcome, {currentUser.username}!
				<button onClick={logout}>Logout</button>
			</div>
				)
	} else {
			return (
				<div>
					<p>
						<Link to={'/login'}>Login</Link> or <Link to={'/signup'}>Signup</Link>
					</p>
				</div>
				)
	}
}

export default Greeting;