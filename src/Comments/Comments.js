import React, { useEffect, useState } from 'react';
import './Comments.css';
const Comments = (props) => {
    const { postId, id, email, name, body } = props.userComment;
    return (
        <div style={{ display: 'flex', margin: '20px' }}>
            <div className='main-section'>
                <h2>ID:{id}</h2>
                <h4>PostId: {postId}</h4>
                <small>Name:{name}</small>
                <p>{body}</p>
                <small>{email}</small>
            </div>
        </div>
    );
};

export default Comments;