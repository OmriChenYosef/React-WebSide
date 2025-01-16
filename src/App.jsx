import React, { useState, useEffect } from 'react';
import Header from './PL/components/header.jsx';
import Footer from './PL/components/Footer.jsx';
import Card from "./PL/components/Card.jsx";
import PrimarySearchAppBar from './PL/components/PrimarySearchAppBar.jsx';
import jsonplaceholderService from './BLL/Service/jsonplaceholderService.js';
import { handleLoadingScreen, handleNotFoundPost } from './PL/callBacks.jsx';

function App() {
  const [posts, setPosts] = useState([]); // State to store posts
  const [loading, setLoading] = useState(true); // State for loading status

  // Fetch posts when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await jsonplaceholderService.fetchPosts(); // Fetch posts from service
        if (data && data.length > 0) {
          setPosts(data); // Update state with posts
        } else {
          console.warn('No posts found');
        }
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      } finally {
        setLoading(false); // Stop the loading spinner
      }
    };

    fetchPosts(); // Call the function
  }, []); // Run only once on mount

  // Handle loading state
  if (loading) {
    return handleLoadingScreen();
  }

  // Handle no posts found
  if (!posts || posts.length === 0) {
    return handleNotFoundPost();
  }

  return (
    <div className="container-page" style={{ position: "relative" }}>
      <div className="page" style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <PrimarySearchAppBar />
        <div className="container">
          {posts.map((post) => (
            <Card
               // Provide a unique key for React rendering
              title={post.title}
              text={post.body}
              imgSrc= {`https://picsum.photos/200/300?random=${post.id}`}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
