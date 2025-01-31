import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jsonplaceholderService from '../../BLL/Service/jsonplaceholderService'

function PostForm() {
  const [postTitle, setPostTitle] = useState(""); // For the title input
  const [postBody, setPostBody] = useState(""); // For the body input
  const [newPostData, setNewPostData] = useState(null);
  const navigate = useNavigate();

  // useEffect to handle the POST request when `newPostData` changes
  useEffect(() => {
    const createPost = async () => {
      if (!newPostData) return;

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
  }, [newPostData, navigate]);


  const handleSubmit = (event) => {
    event.preventDefault();


    setNewPostData({
      title: postTitle,
      body: postBody,
      userId: 1,
    });
  };






  return (
    <div style={{ maxWidth: "400px", margin: "30px auto", padding: "30px", border: "2px solid  #4635B1" }}>
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
