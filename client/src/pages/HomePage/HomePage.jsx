import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../../components/PostCard/PostCard.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import AddPostForm from "../../components/AddPostForm/AddPostForm.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Fetch posts from the API
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  // Add a new post to the state
  const handleAddPost = (newPost) => {
    // Add an ID to the new post (since it's local and won't be saved to the backend)
    const id = posts.length > 0 ? posts[0].id + 1 : 1;
    const newPostWithId = { ...newPost, id, userId: 1 }; // Add userId for consistency
    setPosts([newPostWithId, ...posts]);
  };

  // Filter posts based on the search term
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search Bar */}
      <SearchBar onSearch={setSearchTerm} />

      {/* Add Post Form */}
      <AddPostForm onAddPost={handleAddPost} />

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