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
              <div className="left-side-player">

      </div>
  
    </div>
      
  }
}

export default TracktlistShow;