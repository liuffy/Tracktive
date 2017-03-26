import React from 'react';
// import { Link } from 'react-router';
import Mailto from 'react-mailto';

const Mailee = () => (
      <Mailto 
      	className="link"
      	email="sophialiu.dev@gmail.com" obfuscate={false}>
        here.
      </Mailto>
    );


const SiteInfo = () => (
	<div
		className="site-info">
		<h4
			className="about-header">site</h4>
			<p className="about-text">This site is built on a Ruby on Rails backend, a PostgreSQL database, and
			 	 a React.js with Redux architectural framework on the frontend.
			 	 <br/>
			 	 Icons and wordmarks were created using CSS and Adobe Photoshop 2017.
	</p>
		<h4
			className="about-header">creator</h4>
			<img 
				className="head-shot"
				src="http://res.cloudinary.com/liuffy/image/upload/v1481323424/transparent_me_v6jbcl.png" />
			<p className="about-text">SL has had her fingers in many pies, including organic farming, educating high schoolers, and now learning how to program. 
			Like most developers, she can be found on <a 
				className="link"
				href="https://github.com/liuffy">Github</a> and  <a 
				className="link"
				href="https://www.linkedin.com/in/sophia-liu-a9660229">Linkedin.</a> </p>
				<br/>
			<p className="about-text">Want to get in touch? You can add her on LinkedIn or e-mail her <Mailee /></p>
<br/>
	</div>
	)



export default SiteInfo;