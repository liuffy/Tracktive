import React from 'react';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';
import Footer from '../footer/footer';
import {withRouter, Link} from 'react-router';
import {authModalStyle} from '../../util/modal_styles';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// var ReactCSSTransitionGroup = require('react-addons-css-transition-group')



var Slider = require('react-slick');


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
      this.props.router.push('/browse'); 
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

     var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    $(window).scroll(function(){
    $(".tracktive-wordmark-main").css("opacity", 1 - $(window).scrollTop() / 150);
  });

  $(window).scroll(function(){
    $(".tagline").css("opacity", 1 - $(window).scrollTop() / 250);
  });

      let buttons;
      let {currentUser} = this.props;

      if(!currentUser){
      buttons = (
      <div className="splash-buttons">
      <button className='splash-button' 
          onClick={this.openModal.bind(this, 'login', false)}>login</button>
      <button className='splash-button demo' 
          onClick={this.openModal.bind(this, 'login', true)}>demo</button>
      <button className='splash-button' 
          onClick={this.openModal.bind(this, 'signup', false)}>sign up</button>
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
               <br/>
            <span
              className="tagline">make spotify playlists on the fly.</span>
               {buttons}


      <Slider {...settings}
        className="carousel-container">
        <div className="carousel-element"><h3 className="subtagline">you can do this thing</h3><img src="https://dev.w3.org/2007/mobileok-ref/test/data/ROOT/GraphicsForSpacingTest/1/largeTransparent.gif"/></div>
        <div className="carousel-element"><h3 className="subtagline">also this thing</h3><img src="https://dev.w3.org/2007/mobileok-ref/test/data/ROOT/GraphicsForSpacingTest/1/largeTransparent.gif"/></div>
        <div className="carousel-element"><h3 className="subtagline">and this thing</h3><img src="https://dev.w3.org/2007/mobileok-ref/test/data/ROOT/GraphicsForSpacingTest/1/largeTransparent.gif"/></div>
      </Slider>
        
  
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