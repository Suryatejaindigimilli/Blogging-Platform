import React, { useState } from 'react';
import axios from 'axios';

const PostForm = ({ addPost }) => {
  const [post, setPost] = useState({ title: '', content: '', author: '' });

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/posts', post).then((response) => {
      addPost(response.data);
      setPost({ title: '', content: '', author: '' });
    });
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={post.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="content"
        placeholder="Content"
        value={post.content}
        onChange={handleChange}
        required
      ></textarea>
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={post.author}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;
