import React, { useState } from 'react';
import axios from 'axios';

const Post = ({ post, updatePost, deletePost }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedPost, setUpdatedPost] = useState(post);

  const handleChange = (e) => {
    setUpdatedPost({ ...updatedPost, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:5000/api/posts/${post._id}`, updatedPost).then((response) => {
      updatePost(response.data);
      setIsEditing(false);
    });
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/api/posts/${post._id}`).then(() => {
      deletePost(post._id);
    });
  };

  return (
    <div className="post">
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={updatedPost.title}
            onChange={handleChange}
          />
          <textarea
            name="content"
            value={updatedPost.content}
            onChange={handleChange}
          ></textarea>
          <input
            type="text"
            name="author"
            value={updatedPost.author}
            onChange={handleChange}
          />
          <button onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <small>by {post.author}</small>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Post;
