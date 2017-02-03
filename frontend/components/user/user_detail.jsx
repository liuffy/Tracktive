import React from 'react';
import TracktlistIndexItemContainer from '../tracktlist/tracktlist_index_item_container';
import {withRouter, Link} from 'react-router';
import Masonry from 'react-masonry-component';
import Footer from '../footer/footer';


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
 			<div className="cool-beans">
	 		<h2
	 				className="user-detail-header">{user.username}'s trackts <img
	 					className="like-icon" 
	 					src="http://res.cloudinary.com/liuffy/image/upload/v1486002097/like_icon_cropped_okv740.png" />
	 		</h2>
 			<div
 				className="user-detail-1">
 				<div className="userpage-buttons">
	 				<button className="user-button">CREATED</button>
	 				<button className="user-button">LIKED</button>

 				</div>

 				<Masonry
 				       elementType={'ul'}

          //       {user.createdTracktlists.map(tracktlist =>
          // <TracktlistIndexItemContainer
          //  tracktlist = {tracktlist}
          //  key={tracktlist.id}/>)}
               options={{fitWidth: true, columnWidth: 250 }}>

 				</Masonry>
 			</div>
 			<Footer/>
 			</div>
		)
 	}
 }

 export default UserDetail;