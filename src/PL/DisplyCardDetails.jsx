import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jsonplaceholderService from '../BLL/Service/jsonplaceholderService.js';

const DisplyCardDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {

        const postData = await jsonplaceholderService.fetchPostById(id);
        setPost(postData);

        const commentsData = await jsonplaceholderService.fetchCommentsByPostId(id);
        setComments(commentsData);
      } catch (err) {
        console.log(err);

        setError('Failed to fetch comments or comments. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPostAndComments();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (<div>
    {{ post } && (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    )}

    <div>
      <h2>Comments</h2>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <h4>{comment.name}</h4>
              <p>{comment.body}</p>
              <small>By: {comment.email}</small>
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments found for this post.</p>
      )}
    </div>
  </div>
  );
};

export default DisplyCardDetails;
