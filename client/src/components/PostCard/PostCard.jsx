import React from "react";
import './PostCard.css';

const PostCard = ({ post, onClick }) => {
  return (
    <div className="post-card" onClick={() => onClick(post.id)}>
      <h3>{post.title}</h3>
      <p>{post.body.slice(0, 100)}...</p>
    </div>
  );
};

export default PostCard;