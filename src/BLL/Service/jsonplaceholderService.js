import jsonplaceholderApi from '/Users/omri/Desktop/React_Project/my-react-app/src/DAL/Api/jasonplaceholderApi.js';

const jsonplaceholderService = {
  // Fetch the list of posts
  fetchPosts: async () => {
    try {
      const response = await jsonplaceholderApi.getPosts();
      return response.data; // Extract data from the API response
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  },

  // Fetch comments for a specific post
  fetchCommentsByPostId: async (postId) => {
    try {
      const response = await jsonplaceholderApi.getCommentsByPostId(postId);
      return response.data; // Extract data from the API response
    } catch (error) {
      console.error(`Error fetching comments for post ID ${postId}:`, error);
      throw error;
    }
  },

  // Add a new post
  addNewPost: async (postData) => {
    try {
      const response = await jsonplaceholderApi.addNewPost(postData);
      return response.data; // Return the created post data
    } catch (error) {
      console.error('Error adding a new post:', error);
      throw error;
    }
  },
};

export default jsonplaceholderService;
