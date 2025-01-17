import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/homePage';
import PostDetailsPage from './Pages/postDetailsPage'; 

function App() {
  return (
    <Router basename="/React-WebSide">
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/post/:id" element={<PostDetailsPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
