import React from "react";
import { useParams } from "react-router-dom";
import PostDetails from "../../components/PostDetails/PostDetails.jsx";
import './PostDetailsPage.css'

const PostDetailsPage = () => {
  const { id } = useParams();

  return (
    <div className="post-details-page">
      <PostDetails postId={id} />
    </div>
  );
};

export default PostDetailsPage;