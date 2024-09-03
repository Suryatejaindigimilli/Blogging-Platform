import React from 'react';
import Post from './Post';

const PostList = ({ posts, updatePost, deletePost }) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post._id} post={post} updatePost={updatePost} deletePost={deletePost} />
      ))}
    </div>
  );
};

export default PostList;
