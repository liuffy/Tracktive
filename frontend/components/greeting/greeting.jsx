import React from 'react';
import {Link} from 'react-router';
import {withRouter} from 'react-router';


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
						onClick={this.logout}><span className="logout-text">logout</span></button>
				</div>
					)
		} 
		else {
				return (
					<div>
					</div>
					)
		}
		
	}
}

export default withRouter(Greeting);