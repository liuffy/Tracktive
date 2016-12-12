import React from 'react';
// import { Link } from 'react-router';
import Mailto from 'react-mailto';

const Mailee = () => (
      <Mailto 
      	className="link"
      	email="sliu3@wellesley.edu" obfuscate={false}>
        here.
      </Mailto>
    );


const SiteInfo = () => (
	<div
		className="site-info">
		<h4
			className="about-header">site</h4>
			<p>This site is built on a Ruby on Rails backend, a PostgreSQL database, and
			 	 a React.js with Redux architectural framework on the frontend.</p>

		<h4
			className="about-header">creator</h4>
			<img 
				className="head-shot"
				src="http://res.cloudinary.com/liuffy/image/upload/v1481323424/transparent_me_v6jbcl.png" />
			<p>SL has had her fingers in many pies, including organic farming, educating high schoolers, and now learning how to program. 
			Like most developers, she can be found on <a 
				className="link"
				href="https://github.com/liuffy">Github</a> and 
				<a 
				className="link"
				href="https://www.linkedin.com/in/sophia-liu-a9660229"> Linkedin.</a> </p>
				<br/>
			<p>Want to get in touch? You can add her on LinkedIn or e-mail her <Mailee /></p>
<br/>
<br/>
		<h4
			className="about-header">credit</h4>
			<p>100% of the default playlist art featured on this site comes from  <a 
				className="link"
				href="http://www.dailyminimal.com/">Daily Minimal.</a></p>
	</div>
	)



export default SiteInfo;