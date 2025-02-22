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
      <div className="top-container">
        {/* Come back home button with icon */}
        <button className="back-to-home-button" onClick={handleGoBack}>
          Home Page  <FaArrowRight className="back-to-home-icon" /> 
        </button>
      </div>
      <PostDetails postId={id} />
    </div>
  );
};

export default PostDetailsPage;