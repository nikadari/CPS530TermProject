import React from 'react';
import './Posts.css';
import Profile from "@material-ui/core/Avatar";
import { useState } from "react";
import likeImg from "../../resources/like.png";



function Posts({username, caption, imgLocation, avatar}) {
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
            {/*header -> profile pic and username */}
            <div className = "profile_header">
                <Profile
                    className="profile_pic"
                    alt='Person'
                    src = {avatar}
            
                />
                <h3>{username}</h3>
            </div>
            {/*image */}    
            <img className="post_image" src = {imgLocation}
                alt=''></img>

            {/* like button */} 
            <div className="CaptionLike">
                <img className="likeBtn" src={likeImg} onClick={likeEvent}/>
                <h4 className="Caption"><strong>{likes} likes </strong></h4>
            </div>

            {/*username + caption*/}
            <h4 className="Caption"><strong>{username}</strong> <weak>{caption}</weak></h4>
            
            
            
        </div>
    )
}

export default Posts
