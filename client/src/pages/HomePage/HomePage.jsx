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
  const [searchTitle, setSearchTitle] = useState(""); // Default to empty string to avoid undefined
  const [showAddPostForm, setShowAddPostForm] = useState(false); // State to toggle the form visibility
  const [loading, setLoading] = useState(false); // Loading state for fetch
  const [error, setError] = useState(""); // State to handle errors
  const navigate = useNavigate();

  // Fetch posts from the API when the component is mounted
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true); // Start loading when API request begins
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(response.data); // Store the fetched posts
      } catch (error) {
        setError("Failed to fetch posts. Please try again later."); // Set error if API fails
        console.error("Error fetching posts:", error); // Log the error for debugging
      } finally {
        setLoading(false); // Stop loading after the request finishes
      }
    };

    fetchPosts(); // Trigger the fetch function
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Handle adding a new post
  const handleAddPost = (newPost) => {
    try {
      const id = posts.length > 0 ? posts[0].id + 1 : 1; // Generate new ID based on existing posts
      const newPostWithId = { ...newPost, id, userId: 1 }; // Add userId for consistency
      setPosts([newPostWithId, ...posts]); // Add the new post at the beginning of the posts array
      setShowAddPostForm(false); // Hide the form after adding the post
    } catch (error) {
      setError("Failed to add post. Please try again later."); // Set error if adding post fails
      console.error("Error adding post:", error); // Log the error for debugging
    }
  };

  // Update the search title when the user types in the search bar
  const handleSearch = (title) => {
    setSearchTitle(title || ""); // Update the search term, default to empty string if undefined
  };

  // Filter posts based on the search term
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTitle.toLowerCase()) // Match search term with post titles
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
          onClick={() => setShowAddPostForm(true)} // Toggle the form visibility
        >
          Add Post
        </button>
      )}

      {/* Add Post Form (only shown when showAddPostForm is true) */}
      {showAddPostForm && (
        <AddPostForm
          onAddPost={handleAddPost} // Pass function to handle post submission
          onCancel={() => setShowAddPostForm(false)} // Pass function to hide the form
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
              onClick={(id) => navigate(`/posts/${id}`)} // Navigate to the post detail page
            />
          ))
        ) : (
          <div>No posts found.</div> // Display this message if no posts match the search
        )}
      </div>
    </div>
  );
};

export default Home;