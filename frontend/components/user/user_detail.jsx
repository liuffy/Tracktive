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
 			<div className="user-detail-container">
	 			<span><h2
	 				className="user-detail-header">{user.username}'s trackts
	 		</h2><img
	 					className="headphone-icon" 
	 					src="" /></span>
 			<div
 				className="user-detail-1">
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
 			</div>
		)
 	}
 }

 export default UserDetail;