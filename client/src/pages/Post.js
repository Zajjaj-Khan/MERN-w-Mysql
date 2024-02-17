import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Post() {
  const [postObject, setPostObjecct] = useState();
  const { id } = useParams();
  const [Comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const addComment = () => {
    axios.post("http://localhost:3001/comments", {
      commentBody: comment,
      PostId: id,
    }).then((response) =>{
      const addToComments = {commentBody:comment};
      setComments([...Comments,addToComments]);
      setComment('')
    });
  };
  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((res) => {
      setPostObjecct(res.data);
    });
    axios.get(`http://localhost:3001/comments/${id}`).then((res) => {
      setComments(res.data);
      console.log(res.data);
    });
  }, [id, setPostObjecct]);
  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <div className="title">{postObject?.title}</div>
          <div className="body">{postObject?.postText}</div>
          <div className="footer">{postObject?.username}</div>
        </div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer">
          <input
            type="text"
            placeholder="Comment.."
            value={comment}
            onChange={(event) => {
              setComment(event.target.value);
            }}
          />
          <button onClick={addComment}>Add Comment</button>
        </div>
        <div className="listOfComments ">
          {Comments.map((comment, key) => {
            return (
              <div className="comment" key={key}>
                {comment.commentBody}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Post;
