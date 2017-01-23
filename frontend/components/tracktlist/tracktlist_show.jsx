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
    let {tracktlist} = this.props;

    return(
    <div className="tracktlist-detail cf">
      <div
        className="cover-contents">
      <div className="cover-image-container">
      <img
        className="cover-image"
        src={tracktlist.index_image_url}
        alt="Tracktlist cover"/>

      </div>
      <div className="tracktlist-player">
        <iframe
          src={`${tracktlist.playlistUrl}`}
          height="380"
          frameBorder="0"
          target="_parent"
          allowTransparency="true"></iframe>
      </div>

      </div>

      <div className="tracktlist-info">

        <span className="playlist-title">
      {tracktlist.title}</span>
      <br/>
      <br/>

      <span className="author-label">Created by: </span>
        <span><Link className="link" 
                        to={`/users/${tracktlist.user_id}`}>{tracktlist.username}</Link></span>
        <br />
      <span
        className="artists-label">Featuring:</span>
        <span> {tracktlist.artists}</span>
        <br/>
      <span
        className="artists-label">Published:</span>
        <span> {tracktlist.created_at}</span>
        </div>
    </div>
      )
  }
}

export default TracktlistShow;