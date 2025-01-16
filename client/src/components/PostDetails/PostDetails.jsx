import React, { useEffect, useState } from "react";
import axios from "axios";
import './PostDetails.css';

const PostDetails = ({ postId }) => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => setPost(response.data))
      .catch(error => console.error("Error fetching post:", error));

    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(response => setComments(response.data))
      .catch(error => console.error("Error fetching comments:", error));
  }, [postId]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h3>Comments</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <strong>{comment.name}:</strong> {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetails;