import React from "react";
import './PostCard.css';

const PostCard = ({ post, onClick, onEdit, onDelete }) => {
  return (
    <div className="posts-container">
      <div className="post-card" onClick={() => onClick(post.id)}>
        <h3>{post.title}</h3>
        <p>{post.body.slice(0, 100)}...</p>

        {/* Buttons for editing and deleting */}
        <div className="post-card-buttons">
          <button
            className="edit-button"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(post);
            }}
          >
            Edit
          </button>
          <button
            className="delete-button"
            onClick={(e) => {
              e.stopPropagation(); 
              onDelete(post.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;