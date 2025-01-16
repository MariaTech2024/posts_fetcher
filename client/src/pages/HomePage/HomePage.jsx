import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../../components/PostCard/PostCard.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import AddPostForm from "../../components/AddPostForm/AddPostForm.jsx";
import { useNavigate } from "react-router-dom";
import './HomePage.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Default to empty string to avoid undefined
  const [showAddPostForm, setShowAddPostForm] = useState(false); // State to toggle the form visibility
  const navigate = useNavigate();

  // Fetch posts from the API
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  // Add a new post 
  const handleAddPost = (newPost) => {
    const id = posts.length > 0 ? posts[0].id + 1 : 1;
    const newPostWithId = { ...newPost, id, userId: 1 }; // Add userId for consistency
    setPosts([newPostWithId, ...posts]);
    setShowAddPostForm(false); // Hide the form after adding a post
  };

  // Filter posts based on the search term
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle the search term change
  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue); // Update the state with the new search term
  };

  return (
    <div className="home-container">
      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Add Post Button */}
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
      {/* Posts Container */}
      <div className="posts-container">
        {filteredPosts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onClick={(id) => navigate(`/posts/${id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
