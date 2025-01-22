import React from "react";
import './Pagination.css';

const Pagination = ({ visibleCount, filteredPosts, setVisibleCount }) => {
  return (
    <div className="pagination-links">
      {visibleCount < filteredPosts.length && (
        <span
          className="pagination-link"
          onClick={() => setVisibleCount(visibleCount + 4)}
        >
          Show More
        </span>
      )}
      {visibleCount > 4 && (
        <span
          className="pagination-link"
          onClick={() => setVisibleCount(visibleCount - 4)}
        >
          Show Less
        </span>
      )}
    </div>
  );
};

export default Pagination;