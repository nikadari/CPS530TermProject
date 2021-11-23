import React from 'react';
import './Posts.css';


function Posts() {
    return (
        <div>
            <h3>Username</h3>

            <img className="post_image" src = './resources/dog.jpg'></img>

            {/*header -> profile pic and username */}

            {/*image */}
            <h4 className="Caption"><strong>Username</strong> <weak>caption</weak></h4>
            {/*username + caption*/}
            
            
        </div>
    )
}

export default Posts
