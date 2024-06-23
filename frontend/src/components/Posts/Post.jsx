import React from "react";
import { Link } from "react-router-dom";
import { Deletepost } from "../../Apollo-Client";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";
const Post = ({ title, thumbnail, id, body }) => {
  const [MyMutation]=useMutation(Deletepost)

  const HandleDelete=()=>{
    MyMutation({
      variables: {
        id:id
      },
    });
    toast.success("Deleted Post")

  }
  return (
  <div className="card cards" style={{position:"relative",borderRadius:"23px"}}>
    <Link
      to={`/post/${id}`}
      
      style={{ textDecoration: "none", borderRadius: "32px" }}
    >
      <div className="card-image" >
        <img src={thumbnail} width="300" height="200" alt="" style={{borderRadius:"23px 22px 0 0"}}  />
      </div>
    </Link>

      <div className="card-body relative  text-white" style={{borderRadius:"0 0 23px 23px", backgroundColor:"blue"}}>
        <h1 >{title}</h1>
        <button onClick={HandleDelete} className="btn btn-danger" style={{position:"absolute",right:"10px", top:"10px"}}>Delete</button>
        <p className="body">{body}</p>
      </div></div>
  );
};
export default Post;
