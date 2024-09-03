import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map((post) => (post._id === updatedPost._id ? updatedPost : post)));
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post._id !== id));
  };

  return (
    <div className="App">
      <h1>Blogging Platform</h1>
      <PostForm addPost={addPost} />
      <PostList posts={posts} updatePost={updatePost} deletePost={deletePost} />
    </div>
  );
};

export default App;
