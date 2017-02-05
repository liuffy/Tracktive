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
 		let {user, tracktlists} = this.props;

 		// let filtered = tracktlists.filter( (tracktlist) => { 
   //        let artists = tracktlist.artists.toLowerCase() // these are all the artists
   //        return artists.match(query.toLowerCase()) // include if some (any) of the artists match the query
   //      })

 		let userPlaylists = tracktlists.map(tracktlist =>
          <TracktlistIndexItemContainer
           tracktlist = {tracktlist}
           key={tracktlist.id}/>
           )
      
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