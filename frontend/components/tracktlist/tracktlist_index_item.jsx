import React from 'react';
import {Link} from 'react-router';
import {withRouter} from 'react-router';


const TracktlistIndexItem = ({tracktlist, router}) =>{

		return(
			<li className="index-item" 
				key={tracktlist.id}>
				<Link to={`/tracktlists/${tracktlist.id}`}>
					<img className="thumb" src={tracktlist.index_image_url}/>
					<span>{tracktlist.title}</span>
				</Link>
			</li>)
}



export default withRouter(TracktlistIndexItem)
