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
	 			<span><h2
	 				className="create">{user.username}'s trackts
	 		</h2><img
	 					className="headphone-icon" 
	 					src="" /></span>
	 				<br/>
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