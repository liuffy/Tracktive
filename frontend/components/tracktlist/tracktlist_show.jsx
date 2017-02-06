import React from 'react'
import {withRouter, Link } from 'react-router';
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
  <div className="rect1"></div>
  <div className="rect2"></div>
  <div className="rect3"></div>
  <div className="rect4"></div>
  <div className="rect5"></div>
</div> : <div className="tracktlist-detail cf">
      <div
        className="cover-contents">

      <div className="cover-image-container">
      <img
        className="cover-image"
        src={tracktlist.index_image_url}
        alt="Tracktlist cover"/>

      </div>

      </div>

      <div className="tracktlist-info">

        <span className="playlist-title">
      {tracktlist.title}</span>
      <br/>
      <br/>

      <span className="author-label">Curator: </span>
        <span><Link className="brighter" 
                        to={`/users/${tracktlist.user_id}`}>{tracktlist.username}</Link></span>
        <br />
      <span
        className="artists-label">Featuring:</span>
        <span> {tracktlist.artists}</span>
        <br/>
      <span
        className="artists-label">Published:</span>
        <span> {tracktlist.created_at}</span>
      <br />
        <span
        className="artists-label">Number of tracks:</span>
        <span> {tracktlist.num_tracks}</span>
        </div>
              <div className="left-side-player">
        <iframe
          src={`${tracktlist.playlistUrl}+'&theme=dark'`}
          frameBorder="0"
          width="300" 
          height="380"
          target="_self"
          allowTransparency="true"></iframe>

      </div>
    </div>
      
  }
}

export default TracktlistShow;