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
    <div className="tracktlist-detail">
      <h1 className="playlist-title">
      <img 
        className="music-note"
        src="http://www.clker.com/cliparts/b/3/b/a/11949866861452336960musical_note_3_dennis_bo_01.svg"/> {tracktlist.title}</h1>
      <h3 className="artists-featured">Artists featured: {tracktlist.artists}</h3>

      <img
        className="cover-image"
        src={tracktlist.index_image_url}
        alt="Tracktlist cover"
      />

      <div className="tracktlist-player">
        <iframe
          src={`${tracktlist.playlistUrl}`}
          height="400"
          frameBorder="0"
          target="_parent"
          allowTransparency="true"></iframe>
      </div>
    </div>
      )
  }
}

export default TracktlistShow;