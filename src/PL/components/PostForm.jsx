import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jsonplaceholderService from '/Users/omri/Desktop/React_Project/my-react-app/src/BLL/Service/jsonplaceholderService.js'

function PostForm() {
  const [postTitle, setPostTitle] = useState(""); // For the title input
  const [postBody, setPostBody] = useState(""); // For the body input
  const [newPostData, setNewPostData] = useState(null); 
  const navigate = useNavigate(); // React Router's navigation function

   // useEffect to handle the POST request when `newPostData` changes
   useEffect(() => {
    const createPost = async () => {
      if (!newPostData) return; // Do nothing if no data to post

      try {
        const response = await jsonplaceholderService.addNewPost(newPostData);
        console.log("Post created successfully:", response);

        alert("Post shared successfully!");
        navigate("/"); // Navigate to home after success

      } catch (error) {
        console.error("Error creating post:", error);
        alert("Failed to create the post. Please try again.");
      }
    };

    createPost();
  }, [newPostData, navigate]); // Trigger only when `newPostData` changes


  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form behavior

    // Set the data to trigger the useEffect
    setNewPostData({
      title: postTitle,
      body: postBody,
      userId: 1, // Simulated user ID
    });
  };



   
  

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {/* Post Title Field */}
        <label>
          Post Title:
          <input
            type="text"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            placeholder="Enter your post title"
            required
            style={{ padding: "8px", fontSize: "16px", width: "100%" }}
          />
        </label>

        {/* Post Body Field */}
        <label>
          Post Body:
          <textarea
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
            placeholder="Write your post content"
            required
            style={{ padding: "8px", fontSize: "16px", width: "100%", height: "100px" }}
          />
        </label>

        {/* Share Post Button */}
        <button
          type="submit" // Submits the form when clicked
          style={{
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#4635B1",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Share Post
        </button>
      </form>
    </div>
  );

}

export default PostForm;
