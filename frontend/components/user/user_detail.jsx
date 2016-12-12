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
	 			<h3
	 				className="user-header">{user.username}'s trackts</h3>
	 			<div
	 				className="liked-created-buttons">
				<Link
					onClick="" // ADD ON CLICK!!!!!!!!!!!!!!!!
					className="user-button">Liked</Link>
				<Link
					onClick="" // ADD ON CLICK!!!!!!!!!!!!!!!!
					className="user-button">Created</Link> 
				</div>
 			</div>
		)
 	}
 }

 export default UserDetail;