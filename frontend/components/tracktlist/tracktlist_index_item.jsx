import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';


const TracktlistIndexItem = ({tracktlist, router}) =>{

		return(
			<li className="index-item" 
				key={tracktlist.id}>
				<Link to={`/tracktlists/${tracktlist.id}`}>
				<div className="entire-item">

					<div className="index-image-container">
						<img className="thumb-image" 
							src={tracktlist.index_image_url}/>
					</div>

					<div className="index-right">
						<span
							className="track-index-title">{tracktlist.title}</span>						
						<span
						className="index-text creator-name">by {tracktlist.username}</span>
						<br/>						
						<span
						className="index-text">songs: {tracktlist.num_tracks}</span>
						<br/>						
						<span
						className="index-text artists">features: {tracktlist.artists}</span>
					</div>

				</div>
			</Link>
		</li>)
}



export default withRouter(TracktlistIndexItem)
