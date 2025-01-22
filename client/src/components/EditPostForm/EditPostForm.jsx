import React, { useState } from "react";
import './EditPostForm.css';

const EditPostForm = ({ post, onSave, onCancel }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSave = () => {
    onSave({ ...post, title, body });
  };

  return (
    <div className="edit-post-form">
      <h3>Edit Post</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post Body"
      />
      <div className="button-container">
        <button className="save" onClick={handleSave}>Save</button>
        <button className="cancel" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default EditPostForm;