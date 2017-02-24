import React from 'react'
import {withRouter, Link } from 'react-router';
import Footer from '../footer/footer';
import Masonry from 'react-masonry-component';


// import LikeContainer from '../like/like_container';

class TracktlistShow extends React.Component{
   constructor(props){
    super(props);
  }

      // <LikeContainer />
  componentDidMount(){
    this.props.fetchTracktlist(this.props.params.tracktlistId);
  }

  render(){
    let {tracktlist, loading} = this.props;
    
    $(document).ready(function () {
        window.scrollTo(0,0);
    });

$(window).on('load resize', function() {
  $('iframe[src*="embed.spotify.com"]').each( function() {
    $(this).css('width', $(this).parent().css('width'));
    $(this).attr('src', $(this).attr('src'));
    $(this).removeClass('loaded');
    
    $(this).on('load', function(){
      $(this).addClass('loaded');
    });
  });
});
   let playlistUrl = tracktlist.playlistUrl

    return loading ? <div className="spinner">
  <img className="loader-logo" src="http://res.cloudinary.com/liuffy/image/upload/v1485894607/wordmark-2_m4clkf.png"/>
</div> : <div className="tracktlist-detail cf">

      <div className="tracktlist-info">

      <div className="mix-image-container">
        <img
          className = "mix-image"
          src={tracktlist.index_image_url}
          alt="Tracktlist cover"/>
      </div>

      <div className="info-box">
      <span className="playlist-title">
      {tracktlist.title}</span>
      <br/>
   <span><Link className="brighter" 
                        to={`/users/${tracktlist.user_id}`}>{tracktlist.username}</Link> | {tracktlist.artists} | {tracktlist.created_at} | {tracktlist.num_tracks} tracks </span>
      
        </div>

       </div>
       <br/>
            <div className="iframe-container">
<iframe 
className="player-frame"
src={`${playlistUrl}`}
allowTransparency="true"></iframe>
        <div className="play-info-container">
        <h3>To listen to this tracktlist: </h3>
        </div>
      </div>
    </div>
      
  }
}

export default TracktlistShow;