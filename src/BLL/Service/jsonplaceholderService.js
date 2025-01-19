import jsonplaceholderApi from '../../DAL/Api/jasonplaceholderApi';

const jsonplaceholderService = {
  // Fetch the list of posts
  fetchPosts: async () => {
    try {
      const response = await jsonplaceholderApi.getPosts();
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  },
  fetchPostById: async (postId) => {
    try {
      const response = await jsonplaceholderApi.getPostById(postId);
      return response.data;
    } catch (error) {
      console.error(`Error fetching post for post ID ${postId}:`, error);
      throw error;
    }
  },


  fetchCommentsByPostId: async (postId) => {
    try {
      const response = await jsonplaceholderApi.getCommentsByPostId(postId);
      return response.data;
    } catch (error) {
      console.error(`Error fetching comments for post ID ${postId}:`, error);
      throw error;
    }
  },

  // Add a new post
  addNewPost: async (postData) => {
    try {
      const response = await jsonplaceholderApi.addNewPost(postData);
      return response.data;
    } catch (error) {
      console.error('Error adding a new post:', error);
      throw error;
    }
  },
};

export default jsonplaceholderService;
