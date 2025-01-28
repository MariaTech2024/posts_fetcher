import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PostCard from "../../components/PostCard/PostCard.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import AddPostForm from "../../components/AddPostForm/AddPostForm.jsx";
import EditPostForm from "../../components/EditPostForm/EditPostForm.jsx"; 
import Pagination from "../../components/Pagination/Pagination.jsx"; 
import bannerImage from "../../assets/blog.png";
import './HomePage.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [showAddPostForm, setShowAddPostForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);
  const navigate = useNavigate();

  // Load posts from session storage or fetch from API
  useEffect(() => {
    const savedPosts = JSON.parse(sessionStorage.getItem("posts"));
    if (savedPosts) {
      setPosts(savedPosts);
    } else {
      fetchPosts();
    }
  }, []);

  // Fetch posts from the API and handle errors
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data);
      sessionStorage.setItem("posts", JSON.stringify(response.data));
    } catch (error) {
      setError("Failed to fetch posts. Please try again later.");
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Add a new post to the list and save to session storage
  const handleAddPost = (newPost) => {
    const maxId = posts.reduce((max, post) => Math.max(max, post.id), 0);
    const id = maxId + 1;
    const newPostWithId = { ...newPost, id };
    const updatedPosts = [newPostWithId, ...posts];
    setPosts(updatedPosts);
    sessionStorage.setItem("posts", JSON.stringify(updatedPosts));
    setShowAddPostForm(false);
  };

  // Delete a post and update session storage
  const handleDeletePost = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this post?");
    if (isConfirmed) {
      const updatedPosts = posts.filter((post) => post.id !== id);
      setPosts(updatedPosts);
      sessionStorage.setItem("posts", JSON.stringify(updatedPosts));
    }
  };

  // Edit a post and update session storage
  const handleEditPost = (editedPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === editedPost.id ? editedPost : post
    );
    setPosts(updatedPosts);
    sessionStorage.setItem("posts", JSON.stringify(updatedPosts));
    setEditingPost(null); 
  };

  
  // Filter posts by title
const handleSearch = (title) => {
  setSearchTitle(title || ""); 
};

// Filter posts based on search input
const filteredPosts = !searchTitle.trim() 
  ? posts 
  : posts.filter((post) =>
      post.title.toLowerCase().includes(searchTitle.toLowerCase())
);

  // Display only a limited number of posts
  const visiblePosts = filteredPosts.slice(0, visibleCount);

  return (
    <div className="home-container">
      <div className="banner">
        <img src={bannerImage} alt="Banner" className="banner-image" />
      </div>

      <SearchBar onSearch={handleSearch} />

      {error && <div className="error-message">{error}</div>}

      {!showAddPostForm && !editingPost && (
        <button
          className="add-post-button"
          onClick={() => setShowAddPostForm(true)}
        >
          Add Post
        </button>
      )}

      {showAddPostForm && (
        <AddPostForm
          onAddPost={handleAddPost}
          onCancel={() => setShowAddPostForm(false)}
        />
      )}

      {editingPost && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="close-button"
              onClick={() => setEditingPost(null)}
            >
              &times;
            </button>
            <EditPostForm
              post={editingPost}
              onSave={handleEditPost}
              onCancel={() => setEditingPost(null)}
            />
          </div>
        </div>
      )}

      {loading && <div className="loading-message">Loading posts...</div>}

      <div className="posts-container">
        {visiblePosts.length > 0 ? (
          visiblePosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onClick={(id) => navigate(`/posts/${id}`)}
              onEdit={() => setEditingPost(post)} 
              onDelete={(id) => handleDeletePost(id)}
            />
          ))
        ) : (
          <div>No posts found.</div>
        )}
      </div>

      <Pagination
        visibleCount={visibleCount}
        filteredPosts={filteredPosts}
        setVisibleCount={setVisibleCount}
      />
    </div>
  );
};

export default Home;