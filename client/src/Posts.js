import React from 'react';
import './Posts.css';
import Profile from "@material-ui/core/Avatar";



function Posts({username, caption}) {
    return (
        <div className="posts">
            <div className = "profile_header">
                <Profile
                    className="profile_pic"
                    alt='Person'
            
                />
                <h3>{username}</h3>
            </div>
            <img className="post_image" src = {require('./resources/dog.jpg')}
                alt=''></img>

            {/*header -> profile pic and username */}

            {/*image */}
            <h4 className="Caption"><strong>{username}</strong> <weak>{caption}</weak></h4>
            {/*username + caption*/}
            
            
        </div>
    )
}

export default Posts
