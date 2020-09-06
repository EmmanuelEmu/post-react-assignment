import React from 'react';
import './Comments.css';
const Comments = (props) => {
    console.log(props.userComment);
    const { postId, id, email, name, body } = props.userComment;
    return (
        <div style={{display:'flex'}}>
            <div className = 'main-section'>
                <p>{body}</p>
    <small>{email}</small>
            </div>
            <div className='image-section'>
                <p>image</p>
            </div>
        </div>
    );
};

export default Comments;