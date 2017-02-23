import React from 'react';
import {Link} from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);

    if(this.props.demo){
      this.startUsernameAnimation();
    }
  }

  startUsernameAnimation(){
    this.clearFields();

    const demoName = 'DemoUser';
    let usernameID = setInterval(() => {
      document.getElementById('username').focus();
      let currLength = this.state.username.length;

      if(currLength < demoName.length){
        this.setState({username: this.state.username + demoName.slice(currLength, currLength + 1)});
      } else {
        clearInterval(usernameID);
        this.startPasswordAnimation();
      }
    }, 80);
  }

  startPasswordAnimation(){
    const demoPassword = 'password';
    let passwordID = setInterval(() => {
      document.getElementById('password').focus();
      let currLength = this.state.password.length;

      if(currLength < demoPassword.length){
        this.setState({password: this.state.password + demoPassword.slice(currLength, currLength + 1)});
      } else{
        clearInterval(passwordID);
        this.props.processForm(this.state);
      }
    }, 80);
  }

  clearFields(){
    this.setState({username: "", password: ""});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.processForm(this.state);
  }

  update(place){
    return (event) => {
      this.setState({[place]: event.target.value});
    };
  }


  render(){

    const link = this.props.formType === 'login' ? 'Sign Up' : 'Login';
    const picture = this.props.formType === 'login' ?  <img 
          className="fist-bump"
          src="http://68.media.tumblr.com/c62d4d41221c5976bcf51051fd8464de/tumblr_ohvul2ijhJ1s6mi2go1_1280.gif" /> :

           <img 
          className="hand-wave"
          src="http://res.cloudinary.com/liuffy/image/upload/v1487791818/hand_wave_oyn1yz.svg" />

    const header = this.props.formType === 'signup' ? 'sign up' : 'login';

    const errors = this.props.errors.map(
      (error, idx) => <li key={idx} className='error'>{error}</li>);

    return (
      <div>
          <button className="exit-button"
          onClick={this.props.closeModal}>
              <span>&times;</span>
          </button>
      <div className='session-form'>
        <div >
          <h1 
          className='session-form-header'>{header} to make tracktlists.</h1>


         {picture}
        </div>
        <ul className="login-errors">
          {errors}
        </ul>

        <form onSubmit={this.handleSubmit} className='signup-input-form'>
  
          <input type='text'
            id='username'
            value={this.state.username}
            onChange={this.update('username')}
            placeholder='Username'
            className="standard-input-field"/>

          <input type='password'
            id='password'
            value={this.state.password}
            onChange={this.update('password')}
            placeholder='Password'
            className='standard-input-field'/>

          <button type='submit'
            value='Submit'
            className='submit'>submit</button>
        </form>

         <span className="question">Did you mean to <Link className="link" onClick={this.props.toggleForm}>{link}</Link> instead?</span>

      </div>
      </div>
    );
  }
}

export default SessionForm;