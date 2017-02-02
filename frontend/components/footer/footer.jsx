import React from 'react';
import {Link} from 'react-router';
import AboutModal from '../modals/about-modal';
import GraphicsModal from '../modals/graphics-modal';
import ThanksModal from '../modals/thanks_modal';
import Mailto from 'react-mailto';


class Footer extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
	    const {tracktlists, loading} = this.props;

  	// Script for fading effect 

const Mailee = () => (
      <Mailto 
      	email="sliu3@wellesley.edu" obfuscate={false}>
        E-mail
      </Mailto>
    );

	
  	return(
			<div className="footer">
<img className="wordmark-logo-footer"
            src="http://res.cloudinary.com/liuffy/image/upload/v1485894898/wordmark-3_xpp12b.png"/>
			<div className="column-divs">
				<div className="column-div">
					<h3 className="column-header">TRACKTIVE</h3>

					<ul className="link-list">
						<li><AboutModal/></li>
						<li><a href="">Portfolio</a></li>
					</ul>
				</div>

				<div className="column-div">
					<h3 className="column-header">CONNECT</h3>

					<ul className="link-list">
						<li><a href="https://github.com/liuffy">Github</a></li>
						<li><a href="https://www.linkedin.com/in/sophia-liu-a9660229">LinkedIn</a></li>
						<li><a href="http://recursively-dreaming.tumblr.com/">Tumblr</a></li>
						<li><Mailee/></li>
					</ul>
				</div>

				<div className="column-div">
					<h3 className="column-header">CREDITS</h3>
						<ul className="link-list">
							<li><GraphicsModal/></li>
							<li><ThanksModal/></li>
						</ul>
				</div>
				</div>
			</div>
  		)
	}
}

export default Footer;