import React from 'react';
import {withRouter} from 'react-router';

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
 			<div>
 			<h3>{user.username}</h3>
 			</div>
		)
 	}
 }

 export default UserDetail;