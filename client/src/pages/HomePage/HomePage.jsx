import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../../components/PostCard/PostCard.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import AddPostForm from "../../components/AddPostForm/AddPostForm.jsx";
import { useNavigate } from "react-router-dom";
import bannerImage from "../../assets/blog.png";
import './HomePage.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState(""); 
  const [showAddPostForm, setShowAddPostForm] = useState(false); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

 // Fetch posts from the API 
 useEffect(() => {
  const fetchPosts = async () => {
    setLoading(true); 
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data);
    } catch (error) {
      setError("Failed to fetch posts. Please try again later."); 
      console.error("Error fetching posts:", error); 
    } finally {
      setLoading(false); 
    }
  };

  fetchPosts(); 
}, []); 


// Update the search title when the user types in the search bar
const handleSearch = (title) => {
  setSearchTitle(title || ""); 
};

// Handle adding a new post
const handleAddPost = (newPost) => {
  try {
    // Ensure the ID is unique by finding the maximum existing ID and incrementing it
    const maxId = posts.reduce((max, post) => Math.max(max, post.id), 0);
    const id = maxId + 1;  // Use max id + 1 as the new id
    const newPostWithId = { ...newPost, id, userId: 1 }; // Add userId for consistency
    const updatedPosts = [newPostWithId, ...posts]; // Add the new post at the beginning of the posts array

    setPosts(updatedPosts);
    setSearchTitle(""); 
    setShowAddPostForm(false); 
  } catch (error) {
    setError("Failed to add post. Please try again later.");
    console.error("Error adding post:", error); 
  }
};

// Filter posts based on the search term
const filteredPosts = posts.filter((post) =>
  post.title.toLowerCase().includes(searchTitle.toLowerCase()) 
);

  return (
    <div className="home-container">
      {/* Banner */}
      <div className="banner">
        <img src={bannerImage} alt="Banner" className="banner-image" />
      </div>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Display error message if there's an error */}
      {error && <div className="error-message">{error}</div>}

      {/* Add Post Button (shown if the form is not visible) */}
      {!showAddPostForm && (
        <button
          className="add-post-button"
          onClick={() => setShowAddPostForm(true)} 
        >
          Add Post
        </button>
      )}

      {/* Add Post Form (only shown when showAddPostForm is true) */}
      {showAddPostForm && (
        <AddPostForm
          onAddPost={handleAddPost} 
          onCancel={() => setShowAddPostForm(false)} 
        />
      )}

      {/* Loading state message */}
      {loading && <div className="loading-message">Loading posts...</div>}

      {/* Display posts if available, else show a message */}
      <div className="posts-container">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onClick={(id) => navigate(`/posts/${id}`)} 
            />
          ))
        ) : (
          <div>No posts found.</div> 
        )}
      </div>
    </div>
  );
};

export default Home;