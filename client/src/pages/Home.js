import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
function Home() {
    const [listOfPost, setListOfPost] = useState();
    const navigate = useNavigate();
    useEffect(() => {
      axios.get('http://localhost:3001/posts').then(response => {
        setListOfPost(response.data);
        
      });
    }, [setListOfPost]);
  return (
    <>
    {
        listOfPost?.map((post) => 
    
          <div className="post" key={post.id} onClick={()=>{navigate(`/post/${post.id}`)}}>
            <div className="title">{post.title}</div>
            <div className="body">{post.postText}</div>
            <div className="footer">{post.username}</div>
          </div>
          )}
          </>
  )
}


export default Home