import React from 'react';

const LIKE_ICON = 'http://res.cloudinary.com/liuffy/image/upload/v1482185971/heart-icon_gjel18.png';

const Like = ({createLike, deleteLike, tracktlistId, currentUserId}) => {

let liked = likedTracktlists.includes(currentMixId);
// toggle styling

let likeStyle = liked ? {background: `#5635ae`} : {background: `none`};


let likeMethod;
	if (liked) {
			likeMethod = deleteLike;
	} else {
		  likeMethod = createLike;
	}

	if (currentUserId) {
		return(
				<div 
				className="like-icon">
					<img src={LIKE_ICON}
						style={likeStyle}
						onClick={likeMethod.bind(tracktlistId)} />
					</div> 
			)
	} else{
		return(
		<div></div>
		)
	}
}

export default Like;