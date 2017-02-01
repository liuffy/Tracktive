import React from 'react';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';
import Footer from '../footer/footer';
import {withRouter, Link} from 'react-router';
import {authModalStyle} from '../../util/modal_styles';
import AboutModal from '../about/about-modal';

document.addEventListener('DOMContentLoaded', ()=>{
  Modal.setAppElement(document.body)
})

class Splash extends React.Component{
  constructor(props){
    super(props);

    this.openDemoModal = this.openDemoModal.bind(this);
    this.state = {authModal: false, formType:''};
    this.handleButtonIfLoggedIn = this.handleButtonIfLoggedIn.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.currentUser && nextProps.currentUser.id){
      this.props.router.push('/browse'); // this is how it redirects!!!!!!!!!!!!!!!!!
      }
  }

  openModal(type, demo){
    this.props.clearErrors();
    this.setState({authModal: true, formType: type, demo: demo});
  }

  openDemoModal(){
    this.props.clearErrors();
    this.setState({authModal: true, formType: 'login', demo: true});
  }

  closeModal(){
    this.setState({authModal: false, demo: false});
  }

  toggleForm(){
    this.props.clearErrors();

    if(this.state.formType === 'signup'){
      this.setState({formType: 'login'});
    }else{
      this.setState({formType: 'signup'});
    }
  }

    handleButtonIfLoggedIn(){
    this.props.router.push('/browse');
  }



    render(){

    $(window).scroll(function(){
    $(".tracktive-wordmark-main").css("opacity", 1 - $(window).scrollTop() / 500);
  });

      let buttons;
      let {currentUser} = this.props;

      if(!currentUser){
      buttons = (
      <div className="splash-buttons">
      <button className='splash-button' 
          onClick={this.openModal.bind(this, 'login', false)}>login</button>
      <button className='splash-button' 
          onClick={this.openModal.bind(this, 'signup', false)}>sign up</button>
      <button className='splash-button demo' 
          onClick={this.openModal.bind(this, 'login', true)}>demo</button>
      </div>

        );
    } else {
      buttons = <button 
          className='splash-button' 
          onClick={this.handleButtonIfLoggedIn}>explore! </button>;
    }

      return (
        <div className="whole-page">
          <div className="splash-background"> 
            
            <span 
              className="tracktive-wordmark-main"><Link to="/">tracktive</Link></span>
              <br/>
               {buttons}
               <br/>
            <span
              className="tagline">a simple interface for making playlists.</span>
        
            <AboutModal />

            <Modal isOpen={this.state.authModal}
             className="session-modal"
             onRequestClose={this.closeModal.bind(this)}
             contentLabel="SessionForm"
             style={authModalStyle}>

              <SessionFormContainer formType={this.state.formType}
                closeModal={this.closeModal.bind(this)}
                toggleForm={this.toggleForm.bind(this)}
                demo={this.state.demo}
              />
            </Modal>
            <Footer/>
            </div>
          </div>
        )
  }
}

export default Splash;