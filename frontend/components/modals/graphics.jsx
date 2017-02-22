import React from 'react';


const Graphics = () => (
	<div
		className="site-info cf">
		<h4
			className="about-header">images</h4>
			<div className="left-side">
			 <p className="numbering">1</p><img 
          className="modal-image"
          src="http://res.cloudinary.com/liuffy/image/upload/v1485994080/fist-bump-small_nn2wgh.gif" />


        <p className="numbering">2</p><img
        	className="modal-image"
        	src="http://res.cloudinary.com/liuffy/image/upload/v1486250085/transparent_thumbprint_m42mma.png"/>

			</div>
      <div className = "right-side">
     <p className="about-text">
		[Fist bump, wave] Gifs from the session form were created by <a className="link"
																			href="https://dribbble.com/matt_yow">Matt Yow.</a>
		</p>
		
		<br/>
		     

		<p className="about-text">
		[Fingerprint] This gif from the search component was created by <a className="link"
																			href="https://dribbble.com/antonkudin">Anton Kudin.</a>
		</p>
	
			</div>
	</div>
	)



export default Graphics;