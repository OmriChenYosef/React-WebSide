import React, { useState, useEffect } from 'react';
import Card from "./components/Card.jsx";
import jsonplaceholderService from '../BLL/Service/jsonplaceholderService.js';
import { useNavigate } from 'react-router-dom';


function DisplyCards(){

    const [posts, setPosts] = useState([]); // State to store posts
    const [loading, setLoading] = useState(true); // State for loading status
    
    const navigate = useNavigate(); 
    const cardClicked = (postId) =>{ 
    
       navigate(`/post/${postId}`)
    }

    const handleLoadingScreen = () => {
      <h2>Loading...</h2>
    }
  
    const  handleNotFoundPost = () => {
      <h2>Not founfed postes</h2>
    }

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

  

  if (loading) {
    return handleLoadingScreen();
  }

  if (!posts || posts.length === 0) {
    return handleNotFoundPost();
  }
  else{
    return <div className="container">
    {posts.map((post) => (
      <Card
        onClick={() => cardClicked(post.id)} // Pass post.id to cardClicked
        key={post.id} // Unique key for React
        id={post.id} // Optional: Useful for accessing in Card
        title={post.title.split(' ').slice(0, 40).join(' ') + '...'} // Pass title as prop
        text={post.body} // Pass body as prop
        imgSrc={`https://picsum.photos/200/300?random=${post.id}`} // Dynamic image
      />
    ))}
  </div>
  }
}

export default DisplyCards;