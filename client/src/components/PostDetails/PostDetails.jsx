import React, { useEffect, useState } from "react";
import axios from "axios";
import './PostDetails.css';

const PostDetails = ({ postId }) => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  // Fetch post and comments data 
  useEffect(() => {
    // Fetch the post details using postId
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => setPost(response.data)) 
      .catch(error => console.error("Error fetching post:", error)); 

    // Fetch the comments associated with the specific postId
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(response => setComments(response.data)) 
      .catch(error => console.error("Error fetching comments:", error)); 
  }, [postId]); 

  if (!post) return <p>Loading...</p>;

  return (
    <div className="post-details">
      {/* Post Title Section */}
      <div className="post-title">
        <h2>{post.title}</h2>
      </div>

      {/* Post Body Section */}
      <div className="post-body">
        <p>{post.body}</p>
      </div>

      {/* Comments Section */}
      <div className="comments-section">
        <h3>Comments</h3>
        {/* Map through comments and display each one */}
        <ul>
          {comments.map(comment => (
            <li key={comment.id} className="comment">
              <strong>{comment.name}:</strong>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostDetails;