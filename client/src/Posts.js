import React from 'react';
import './Posts.css';
import Profile from "@material-ui/core/Avatar";



function Posts({username, caption, imgLocation, avatar, username2, comment, username3, comment1}) {
     {/*state variables needed for likes */}
     const [likes, setLikes] = useState(0)
     const [isLiked, setIsLiked] = useState(false)
 
     {/* set state function, determines if like button is pressed or not */}
     const likeEvent =() =>{
         setLikes(isLiked ? likes-1 : likes+1)
         setIsLiked(!isLiked)
     }
    return (
        <div className="posts">
            <div className = "profile_header">
                <Profile
                    className="profile_pic"
                    alt='Person'
                    src = {avatar}
            
                />
                <h3>{username}</h3>
            </div>
            <img className="post_image" src = {imgLocation}
                alt=''></img>

            {/*header -> profile pic and username */}
            {/* like button */} 
            <div className="CaptionLike">
                <img className="likeBtn" src={likeImg} onClick={likeEvent}/>
                <h4 className="Caption"><strong>{likes} likes </strong></h4>
            </div>

            {/*image */}
            <h4 className="Caption"><strong>{username}</strong> <weak>{caption}</weak></h4>
            <h5 className="Caption"><strong>{username2}</strong> <weak>{comment}</weak></h5>
            <h6 className="Caption"><strong>{username3}</strong> <weak>{comment1}</weak></h6>
            {/*username + caption*/}
            
            
        </div>
    )
}

export default Posts
