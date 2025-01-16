import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/HomePage.jsx";
import PostDetailsPage from "./pages/PostDetailsPage/PostDetailsPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<PostDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;