import React from 'react';
import { Link } from 'react-router';
import AboutModal from '../modals/about-modal';
import GraphicsModal from '../modals/graphics-modal';
import ThanksModal from '../modals/thanks_modal';
import Mailto from 'react-mailto';
import Masonry from 'react-masonry-component';



class Footer extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
		const {tracktlists, loading} = this.props;

		const Mailee = () => (
			<Mailto 
				email="sliu3@wellesley.edu" obfuscate={false}>
				E-mail
			</Mailto>
		);


		return(
		<div className="footer">
			<div className="column-divs">
			<Masonry
				elementType={'ul'}
				options={{fitWidth: false, columnWidth: 170, gutter: 20}}
			>
				<img className="wordmark-logo-footer"
				src="http://res.cloudinary.com/liuffy/image/upload/v1485894898/wordmark-3_xpp12b.png"/>
				<div className="column-div">
					<h3 className="column-header">TRACKTIVE</h3>

					<ul className="link-list">
						<li><AboutModal/></li>
						<li><a 
						target="_blank"
						href="http://www.sophia-liu.com/">Portfolio</a></li>
					</ul>
				</div>

				<div className="column-div">
					<h3 className="column-header">CONNECT</h3>

					<ul className="link-list">
						<li><a 
						target="_blank"
						href="https://github.com/liuffy">Github</a></li>
						<li><a 
						target="_blank"
						href="https://www.linkedin.com/in/sophia-liu-a9660229">LinkedIn</a></li>
						<li><a 
						target="_blank"
						href="http://recursively-dreaming.tumblr.com/">Tumblr</a></li>
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
			</Masonry>
			</div>
		</div>
  		)
	}
}

export default Footer;