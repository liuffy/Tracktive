import React from 'react';
import {Link, withRouter} from 'react-router';
import Footer from '../footer/footer';


class TracktlistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       user_id: this.props.currentUser.id,
       artists:"",
       playlistUrl: "",
       title:"",
       index_image_url:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property){
  	return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let { createTracktlist, tracktlists } = this.props;
    let { artists, index_image_url, title } = this.state;
    let showpageId = tracktlists.length + 1 // redirect to page of newly created playlist
    createTracktlist(artists, title, index_image_url)
    this.props.router.push(`/users/${this.props.currentUser.id}`) // redirect

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
    let {tracktlists} = this.props;
  	let {title, artists, index_image_url, user_id, playlistUrl} = this.state;


  	return(
      <div className="form">
       

      <div
      className="tracktlist-form cf">

        <form
          onSubmit = {this.handleSubmit}>
        <br />


      <div className="create-form">
        <label><h3
          className="create">Enter artists you want to hear (separated by commas).</h3>
        <input 
          className="standard-input-field2"
          data-role="tagsinput"
          type='text'
          value={artists}
          placeholder="ex: phantogram, grimes"
          onChange={this.update('artists')}
           />
        </label>
        <br />

        <label><h3
          className="create">Name your tracktlist.</h3>
        <input 
          className="standard-input-field2"
          type='text'
          value={title}
          placeholder="ex: 'high school nostalgia'"
          onChange={this.update('title')} />
        </label>
        <br />


        <label><h3
          className="create">Paste image URL for the mix's cover art (PNG, JPG, etc.)</h3>
        <input 
          className="standard-input-field2"
          type='text'
          value={index_image_url}
          placeholder="ex: pretty_picture.png"
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
