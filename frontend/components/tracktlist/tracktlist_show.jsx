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

  instructionsToggle(){

  }

  render(){

    let {tracktlist, loading} = this.props;

    $(document).ready(function () {
        window.scrollTo(0,0);

    });


   let playlistUrl = tracktlist.playlistUrl;
   let tracktlistAge = `~${tracktlist.age} ago`;

    return loading ? <div className="spinner">
  <img className="loader-logo" src="http://res.cloudinary.com/liuffy/image/upload/v1491921600/vinyl_pwajpu.svg"/>
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
                        to={`/users/${tracktlist.user_id}`}>{tracktlist.username}</Link> | {tracktlist.artists} | {tracktlistAge} | {tracktlist.num_tracks} tracks </span>
      
        </div>
       </div>
       <br/>
        <div className="iframe-container">
        <div className="iframe-trap">
            <iframe 
            className="player-frame"
            src={`${playlistUrl}`}
            allowTransparency="true"></iframe>
        </div>
            <div className="play-info-container">
            <h3>How to listen if you... </h3>
            <button 
            id="optionOne"
            className="info-subtitle optionOne">Have the Spotify app


            </button>
 
            <ol 
              id="haveSpotify"
              className="spotify-instructions">
            <li>Click on the playlist, and it will open in the app!</li></ol>

            <button 
            id="optionTwo"
            className="info-subtitle otherOption">Don't have Spotify app/account</button>
            
             <ol 
              id="dontHaveSpotify"
              className="spotify-instructions">

              <li>Click on the playlist.</li>
              <li>Use login credentials below to log in to the Spotify web player:
                <p className="credentials">
                <br/>
                Username: TracktiveDemoUser
                <br/>
                Password: tracktive</p>
              </li>
           </ol>
        </div>
      </div>
    </div>
      
  }
}

export default TracktlistShow;