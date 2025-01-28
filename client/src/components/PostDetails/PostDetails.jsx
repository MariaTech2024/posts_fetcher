import React, { useEffect, useState } from "react";
import axios from "axios";
import './PostDetails.css';

const PostDetails = ({ postId }) => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the post details
        const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        setPost(postResponse.data);

        // Fetch the comments after the post is fetched
        const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        setComments(commentsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [postId]);


  if (loading) return <p>Loading...</p>;

  if (!post) return <p>No comments found.</p>;

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
        <ul>
          {comments.map(comment => (
           <li key={comment.id} className="comment">
           <div className="comment-header">
             <span className="comment-email">{comment.email}:</span>
             <br />
             <span className="comment-name">{comment.name}</span>
             <br />
           </div>
           <p className="comment-body">{comment.body}</p>
         </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostDetails;