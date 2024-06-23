import {useSubscription } from "@apollo/client";
import React from "react";
import Post from "./Post";
import { GetallPosts } from "../subscriptions";
const Posts = () => {
  const { data, loading, error } = useSubscription(GetallPosts);
  localStorage.setItem("posts", JSON.stringify(data));
  if (error) return alert(error.message);
  if (loading) return <h1>Loading ....</h1>;
  return (
    <div className="grid">
      {data.Posts.map((data, index) => (
        <div key={index}>
          <Post {...data} index={index} />
        </div>
      ))}
    </div>
  );
};
export default Posts;
