import React from 'react';
import {Link} from 'react-router';


class Greeting extends React.Component{
	constructor(props){
	  super(props);
	  this.logout = this.logout.bind(this);
	}


	 logout(){
    this.props.logout();
  }

	render(){
	let {currentUser} = this.props;
		if (currentUser){
			return (
				<div className="greeting-container">
					<span className="greeting">hi again, <Link className="link" 
												to={`/users/${currentUser.id}`}>{currentUser.username}.</Link></span>
					<button 
						className="logout-button"
						onClick={this.logout}>logout</button>
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
}

export default Greeting;