import React from 'react';
import {useHistory } from 'react-router-dom';

const Posts = (props) => {
    const { userId, id, title, body } = props.post;

    //Event Handler
    const history = useHistory();
    const handleClick = (postId)=>{
        history.push(`/posts/${postId}`)
    };
    return (
        <div style = {{border:'1px solid red',margin:'20px',textAlign:'center',padding:'10px',borderRadius:'10px'}}>
            <h4>Id:{userId}</h4>
            <h1>{title}</h1>
            <p>{body}</p>
            <button onClick = {()=>handleClick(id)}>Details</button>
        </div>
    );
};

export default Posts;