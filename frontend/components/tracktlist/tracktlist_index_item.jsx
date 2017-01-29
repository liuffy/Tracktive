import React from 'react';
import {Link} from 'react-router';
import {withRouter} from 'react-router';


const TracktlistIndexItem = ({tracktlist, router}) =>{

		return(
			<li className="index-item" 
				key={tracktlist.id}>
				<Link to={`/tracktlists/${tracktlist.id}`}>
				<div className="entire-item">
				<div className="index-image-container">
					<img className="thumb-image" 
						src={tracktlist.index_image_url}
/>
					</div>
					<span
						className="track-index-text">{tracktlist.title}</span>
				</div>
				</Link>
			</li>)
}



export default withRouter(TracktlistIndexItem)
