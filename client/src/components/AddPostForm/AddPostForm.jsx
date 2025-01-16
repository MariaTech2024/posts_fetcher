import React, { useState } from "react";
import './AddPostForm.css';

const AddPostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPost({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form className="add-post-form" onSubmit={handleSubmit}>
      <h2>Add a New Post</h2>
      <input
        className="add-post-form-input"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="add-post-form-textarea"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button className="add-post-form-button" type="submit">
        Add Post
      </button>
    </form>
  );
};

export default AddPostForm;