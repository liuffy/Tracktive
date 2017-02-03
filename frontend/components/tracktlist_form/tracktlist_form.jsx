import React from 'react';
import {Link, withRouter} from 'react-router';


class TracktlistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       user_id: currentUser.id,
       artists:"",
       playlistUrl: "",
       title:"",
       index_image_url:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.returnToMain = this.returnToMain.bind(this);
  }

  update(property){
  	return e => this.setState({[property]: e.target.value});
  }

  returnToMain(){ // for the cancel button 
      this.props.router.push('/browse')
  }

 //  redirectIfLoggedIn() {
 //    if (this.props.loggedIn) {
 //      this.props.router.push("/");
 //    }
 //  }

 //  componentDidUpdate() { // this is a lifecycle method used to perform 
 //  	//DOM operations after the data has been updated 
	// 	this.redirectIfLoggedIn();
	// }

  
  handleSubmit(e) {
    let { createTracktlist } = this.props;
    let { artists, index_image_url, title } = this.state;
    console.log('wooohooo')
    e.preventDefault();
    createTracktlist(artists, title, index_image_url)
    this.props.router.push(`/browse`) // redirect

    console.log('weeheee')
  }



  // renderErrors(e){
  // 	let {errors} = this.props;

  // 	return(
		// 	<ul>
  // 			{errors.map((error, idx) => (
		// 			<li className="error" 
  //             key={idx}>{error}</li>
  // 			))}
  // 			</ul>
  // 			)
  // 		}
				
  render(){
  	let {title, artists, index_image_url, user_id, playlistUrl} = this.state;

    // Script for fading effect 

  	return(
      <div>
        <h2
          className="create-banner-text">create a tracktlist          <img 
                className="flask-logo"
                src="http://res.cloudinary.com/liuffy/image/upload/v1485845606/flask-final_mb5xeo.png"/></h2> 

      <div
      className="tracktlist-form cf">

        <form
          onSubmit = {this.handleSubmit}>
        <br />


      <div className="create-form">

        <label><h3
          className="create">1. Enter up to 4 artists you want to hear (separated by commas):</h3>
        <input 
          className="creation-input-field"
          type='text'
          value={artists}
          placeholder="ex: phantogram, grimes"
          onChange={this.update('artists')}
           />
        </label>
        <br />

        <label><h3
          className="create">2. Give your Tracktlist a descriptive name (5 words or less)</h3>
        <input 
          className="creation-input-field"
          type='text'
          value={title}
          placeholder="ex: 'high school nostalgia'"
          onChange={this.update('title')} />
        </label>
        <br />


        <label><h3
          className="create">3. Paste image URL for your tracktlist cover art</h3>
        <input 
          className="creation-input-field"
          type='text'
          value={index_image_url}
          placeholder="ex: http://www.phantogram.com/wp-content/themes/phantogram/dist/images/music-new.jpg"
          onChange={this.update('index_image_url')} />
        </label>
        <br />

        <button
        className="create-button">create tracktlist</button>

        </div>
        </form>
      </div>
      </div>
    )
  }

}

export default withRouter(TracktlistForm);
