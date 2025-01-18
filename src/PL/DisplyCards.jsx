import React, { useState, useEffect } from 'react';
import Card from "./components/Card.jsx";
import jsonplaceholderService from '../BLL/Service/jsonplaceholderService.js';
import { useNavigate } from 'react-router-dom';


function DisplyCards(byTitle) {

  console.log(' for:', typeof (str));
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const cardClicked = (postId) => {
    navigate(`/post/${postId}`)
  }

  const handleLoadingScreen = () => {
    <h2>Loading...</h2>
  }

  const handleNotFoundPost = () => {
    <h2>Not founfed postes</h2>
  }

  // Fetch posts 
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await jsonplaceholderService.fetchPosts();
        if (data && data.length > 0) {
          setPosts(data);
        } else {
          console.warn('No posts found');
        }
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);



  if (loading) {
    return handleLoadingScreen();
  }

  if (!posts || posts.length === 0) {
    return handleNotFoundPost();
  }
  else {
    return <div className="container">
      {posts.map((post) => (

        post.title.includes(byTitle.byTitle) || (byTitle.byTitle === null) ? <Card
          onClick={() => cardClicked(post.id)}
          key={post.id}
          id={post.id}
          title={post.title}
          text={post.body.split(' ').slice(0, 40).join(' ') + '...'}
          imgSrc={`https://picsum.photos/200/300?random=${post.id}`}
        /> : console.log("ddd", post.title.includes(byTitle.byTitle), post.title, byTitle)

      ))}
    </div>
  }
}

export default DisplyCards;