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
	  this.props.fetchTracktlists();
}


 	render(){
 		let {user, tracktlists, currentUser} = this.props;
 		let userPlaylists = [];
 		let greeting = <div><h2></h2></div>

 		// let createdTracktlists = user.tracktlists;

 		if (currentUser.username === user.username){
 			greeting = <div className="profile-greeting-container"><h2 className="profile-greeting">Your tracktlists:</h2></div>
 		} else {
 			greeting = <div className="profile-greeting-container"><h2 className="profile-greeting"></h2></div>
 		}

 		let filteredTracktlists = tracktlists.filter( (tracktlist) => { 
          return tracktlist.username === user.username // include if some (any) of the artists match the query
        })

 		userPlaylists = filteredTracktlists.map(tracktlist =>
          <TracktlistIndexItemContainer
           tracktlist = {tracktlist}
           key={tracktlist.id}/>
           )
   //  // console.log(user.username.toLowerCase())  
   //  console.log('user.username:', user.username)
 		// console.log('user.createdTracktlists: ', user.createdTracktlists)

        $(".footer").removeClass( "footer" ).addClass("index-footer");

 		return(
 			<div className="whole-index-page">
	 		<h2
	 				className="explore">{user.username}'s trackts <img
	 					className="like-icon" 
	 					src="http://res.cloudinary.com/liuffy/image/upload/v1486002097/like_icon_cropped_okv740.png" />
	 		</h2>
 			<div
 				className="tracktlists-index">
 				<div className="userpage-buttons">
	 				<button className="user-button">CREATED</button>
	 				<button className="user-button">LIKED</button>

 				</div>

               {greeting}
 				<Masonry
 							 className="tracktlists-index-container"
 				       elementType={'ul'}
               options={{fitWidth: true, columnWidth: 250 }}>
               {userPlaylists}
 				</Masonry>

 			</div>
 			<Footer/>
 			</div>
		)
 	}
 }

 export default UserDetail;