import { useSubscription } from "@apollo/client";
import React from "react";
import Post from "./Post";
import { GetallPosts } from "../subscriptions";
const Posts = () => {
  const { data, loading, error } = useSubscription(GetallPosts);
  localStorage.setItem("posts", JSON.stringify(data));
  if (error) return alert(error.message);
  if (loading) return <h1 className="text-center mt-4">Loading ....</h1>;
  return (
    <div >
     
     <div className="grid">
     {data.Posts.map((data, index) => (
        <div key={index}>
          <Post {...data} index={index} />
        </div>
      ))}
     </div>
     {data.Posts.length ===0 && (
      <h1 style={{textAlign:"center",marginTop:"14%"}}>Please Add New Posts</h1>
     )}
    </div>
  );
};
export default Posts;
