import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/homePage';
import PostDetailsPage from './Pages/postDetailsPage';
import CreatePostPage from './Pages/CreatePostPage'

function App() {
  return (
    <Router basename="/React-WebSide">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostDetailsPage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
