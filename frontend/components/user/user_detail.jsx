import React from 'react';
import {withRouter, Link} from 'react-router';

class UserDetail extends React.Component{
	 constructor(props){
    super(props);
  }

  componentDidMount(){
		this.props.fetchUser(this.props.params.userId);
	}

 	render(){
 		let {user} = this.props;

 		return(
 			<div
 				className="user-detail">
	 			<span><span
	 				className="user-header">{user.username}'s trackts
	 		</span><img
	 					className="headphone-icon" 
	 					src="http://www.clipartbest.com/cliparts/4ib/76g/4ib76gKig.png" /></span>
	 			<div
	 				className="liked-created-buttons">
				<Link
					onClick="" // ADD ON CLICK!!!!!!!!!!!!!!!!
					className="user-button">LIKED</Link>
				<Link
					onClick="" // ADD ON CLICK!!!!!!!!!!!!!!!!
					className="user-button">CREATED</Link> 
				</div>
 			</div>
		)
 	}
 }

 export default UserDetail;