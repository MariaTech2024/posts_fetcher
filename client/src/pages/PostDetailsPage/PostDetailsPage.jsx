import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostDetails from "../../components/PostDetails/PostDetails.jsx";
import { FaArrowRight } from "react-icons/fa";  
import './PostDetailsPage.css';

const PostDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="post-details-page">
      {/* Container for the button and the post details */}
      <div className="top-container">
        {/* Come back to home button with icon */}
        <button className="back-to-home-button" onClick={handleGoBack}>
          Home Page  <FaArrowRight className="back-to-home-icon" /> 
        </button>
      </div>
      {/* Post Details */}
      <PostDetails postId={id} />
    </div>
  );
};

export default PostDetailsPage;