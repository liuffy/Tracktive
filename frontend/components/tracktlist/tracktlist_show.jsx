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
        <span className="playlist-title">
      {tracktlist.title}</span>
      <span className="author-label">by <Link 
                                         className="link"
                                         to={`/users/${tracktlist.user_id}`}>
                                         {tracktlist.user_id}</Link></span>
      </div>

      <span
        className="artists-label">Featuring:
        <span className="artists-featured"> {tracktlist.artists}</span></span>
      <div className="tracktlist-player">
        <iframe
          src={`${tracktlist.playlistUrl}`}
          height="380"
          frameBorder="0"
          target="_parent"
          allowTransparency="true"></iframe>
      </div>
    </div>
      )
  }
}

export default TracktlistShow;