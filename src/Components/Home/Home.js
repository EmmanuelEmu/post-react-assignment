import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';

const Home = () => {

    //Using State for Posted data
    const [post,setPost] = useState([]);  

    const url = 'https://jsonplaceholder.typicode.com/posts';
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[]);
    return (
        <div>
            {
                post.map(pst=><Posts post={pst}></Posts>)
            }
        </div>
    );
};

export default Home;