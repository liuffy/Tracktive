import React from 'react';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';
import Footer from '../footer/footer';
import {withRouter, Link} from 'react-router';
import {authModalStyle} from '../../util/modal_styles';



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
    $(".tracktive-wordmark-main").css("opacity", 1 - $(window).scrollTop() / 350);
  });

  $(window).scroll(function(){
    $(".tagline").css("opacity", 1 - $(window).scrollTop() / 450);
  });

      let buttons;
      let {currentUser} = this.props;

      if(!currentUser){
      buttons = (
      <div className="splash-buttons">
      <button className='splash-button' 
          onClick={this.openModal.bind(this, 'login', false)}>login</button>
          <div className='text-blurb scaleDownOut'>
            <span>Skip the formalities</span>
          <div className="triangle"></div>
          </div>


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
          <div className="splash-background"> 
        <div className="whole-page">
            <span 
              className="tracktive-wordmark-main"><Link to="/">tracktive</Link></span>
              <br/>
               <br/>
            <span
              className="tagline">Make Spotify playlists on the fly.</span>


        
          <Modal isOpen={this.state.authModal}
            className="faded-modal"
             onRequestClose={this.closeModal.bind(this)}
             contentLabel="SessionForm"
             style={authModalStyle}>


              <SessionFormContainer formType={this.state.formType}
                closeModal={this.closeModal.bind(this)}
                toggleForm={this.toggleForm.bind(this)}
                demo={this.state.demo}
              />
            </Modal>

               {buttons}


            <Footer/>
            </div>
    <div className="splash-block-1" >
      <div className="splash-text">
        <h2 className="splash-header">The fastest way to build a perfect playlist.</h2>
          <p className="purp-text">Trying to build the perfect ambiance for your hangout but don't have the time to make a 
          5-hour long playlist?</p>
          <br/>
          <p className="purp-text h3"><b>Make a tracktlist in seconds.</b></p>
          <br/>
          <p className="purp-text">Enter the artists you like, 
          give it a name, and instantly create the tracklist you need.</p>


      </div>
     <Slider {...settings}
        className="carousel-container">

        <div className="carousel-element">
          <img src="http://res.cloudinary.com/liuffy/image/upload/v1491877300/screen1.png"/>
        </div>
        
        <div className="carousel-element">
          <img src="http://res.cloudinary.com/liuffy/image/upload/v1491878105/screen2.5.png"/>
        </div>        

        <div className="carousel-element">
          <img src="http://res.cloudinary.com/liuffy/image/upload/v1491877924/screen2.png"/>
        </div>

        <div className="carousel-element">
          <img src="http://res.cloudinary.com/liuffy/image/upload/v1491877981/screen4.png"/>
        </div>


      </Slider>

    </div>
      <div className="splash-block-2">
     
      <img className="headphones-pic" 
          src="http://res.cloudinary.com/liuffy/image/upload/v1491882053/listening_aiqegr.svg" />
      <div className="splash-text-2">
 <h2 className="splash-header-2">Save playlists that you create and like.</h2>
  <p className="white-text">Morning yoga? Pump up jams? Study session? <br/> Create playlists for any occasion. Your playlists will be saved to your account, so you can jam out whenever you want.</p>
  <img className="image-block-2"
        src="http://res.cloudinary.com/liuffy/image/upload/v1491886635/save_eueopy.svg"/>
      </div>

            <div className="splash-text-2">
 <h2 className="splash-header-2">Discover new artists or songs.</h2>
  <p className="white-text">Scroll through the collections of music that other people have made. Find new songs from artists you already love,
  or discover exciting new artists you've never listened to before.</p>
    <img className="image-block-2"
        src="http://res.cloudinary.com/liuffy/image/upload/v1491886948/new_os9tdz.svg"/>
      </div>
      </div>
  </div>
        )
  }
}

export default Splash;