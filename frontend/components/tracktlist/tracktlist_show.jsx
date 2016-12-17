import React from 'react'
import {withRouter, Link } from 'react-router';

class TracktlistShow extends React.Component{
   constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTracktlist(this.props.params.tracktlistId);
  }

  render(){
    let {tracktlist} = this.props;

    return(
    <div>
      <h1 className="playlist-title">{tracktlist.title}</h1>

      <img
        className="cover-image"
        src={tracktlist.index_image_url}
        alt="Tracktlist cover"
      />

      <div className="tracktlist-player">
        <iframe
          src={`${tracktlist.playlistUrl}`}
          height="80"
          frameBorder="0"
          allowTransparency="true"></iframe>
      </div>
    </div>
      )
  }
}

export default TracktlistShow;