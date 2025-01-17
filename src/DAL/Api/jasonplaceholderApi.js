import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const jsonplaceholderApi = {
  // Fetch all posts
  getPosts: () => axios.get(`${API_BASE_URL}/posts`),

  // Fetch comments for a specific post
  getCommentsByPostId: (postId) => axios.get(`${API_BASE_URL}/posts/${postId}/comments`),

  // Add a new post
  addNewPost: (postData) => axios.post(`${API_BASE_URL}/posts`, postData),

  getPostById: (id) => axios.get(`${API_BASE_URL}/posts/${id}`),
};

export default jsonplaceholderApi;
