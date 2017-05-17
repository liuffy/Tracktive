import React from 'react';
import TracktlistIndexItemContainer from '../tracktlist/tracktlist_index_item_container';
import { withRouter, Link } from 'react-router';
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

    $(window).scroll(function(){
      $(".explore").css("opacity", 1 - $(window).scrollTop() / 250);
    });

 		let {user, tracktlists, currentUser} = this.props;
 		let userPlaylists = [];
 		let greeting = <div><h2></h2></div>


 		if (currentUser.username === user.username){
 			greeting = <div className="profile-greeting-container"><h2 className="profile-greeting">tracktlists you've made:</h2></div>
 		} else {
 			greeting = <div className="profile-greeting-container"><h2 className="profile-greeting"></h2></div>
 		}

 		let filteredTracktlists = tracktlists.filter( (tracktlist) => { 
          return tracktlist.username === user.username // include if some (any) of the artists match the query
        })

 		userPlaylists = filteredTracktlists.reverse().map((tracktlist,idx) =>
          <TracktlistIndexItemContainer
           tracktlist = {tracktlist}
           key={idx}/>
           )

    $(".footer").removeClass( "footer" ).addClass("index-footer");

 		return(
    <div className="whole-index-page">
      <h2
        className="explore">{user.username}'s trackts <img
        className="like-icon" 
        src="http://res.cloudinary.com/liuffy/image/upload/v1491888328/like_3_udw10b.svg" />
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