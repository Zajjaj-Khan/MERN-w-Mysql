import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Post() {
  const [postObject, setPostObjecct] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((res) => {
      setPostObjecct(res.data);
    });
  }, [id, setPostObjecct]);
  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="title">{postObject?.title}</div>

        <div className="postText">{postObject?.postText}</div>
        <div className="footer">{postObject?.username}</div>
      </div>
      <div className="rightSide"></div>
    </div>
  );
}

export default Post;
