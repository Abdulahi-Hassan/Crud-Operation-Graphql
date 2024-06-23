import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Createpost } from "../../Apollo-Client";
import axios from "axios";
import { toast } from "react-hot-toast";

const NewPost = () => {
  const [post, setpost] = useState({
    title: "",
    body: "",
    thumbnail: "",
  });
  let navigate = useNavigate();
  const [MyMutation] = useMutation(Createpost);
  const Handlepost = async (e) => {
    e.preventDefault();
    const upload_preset = "wnx0tmuv";
    const cloud_name = "dcteurhwi";
    let formdata = new FormData();
    formdata.append("file", post.thumbnail);
    formdata.append("upload_preset", upload_preset);

    try {
      MyMutation({
        variables: {
          title: post.title,
          body: post.body,
          thumbnail: post.thumbnail
            ? await axios
                .post(
                  `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
                  formdata
                )
                .then(({ data }) => data.secure_url)
            : "https://res.cloudinary.com/dcteurhwi/image/upload/v1719152398/mz6yphs6dscqf3uikoo4.png",
        },
      });

      toast.success("Successfully Created New Post");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="contaier d-flex align-items-center  text-center  justify-content-center "
      style={{ height: "600px" }}
    >
      <div
        className="card"
        style={{ width: "450px", borderRadius: "12px", height: "350px" }}
      >
        <div
          className="card-title   "
          style={{ fontSize: "38px", fontWeight: "600", position: "relative" }}
        >
          <strong>Create post</strong>
          <Link
            to="/"
            className=" btn btn-danger mt-2 "
            style={{ position: "absolute", right: "12px" }}
          >
            X
          </Link>
        </div>
        <div className="card-body ">
          <form onSubmit={Handlepost}>
            <div className="row">
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter Your title"
                  value={post.title}
                  onChange={(e) =>
                    setpost({
                      ...post,
                      title: e.target.value,
                    })
                  }
                />
              </div>

              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your Body"
                  value={post.body}
                  onChange={(e) =>
                    setpost({
                      ...post,
                      body: e.target.value,
                    })
                  }
                />
              </div>

              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <label htmlFor="upload" className="form-control mt-4">
                  {post.thumbnail ? post.thumbnail.name : "Upload-Image"}
                </label>
                <input
                  type="file"
                  id="upload"
                  hidden
                  className="form-control mt-4"
                  onChange={(e) =>
                    setpost({
                      ...post,
                      thumbnail: e.target.files[0],
                    })
                  }
                />
              </div>

              <div className="col-6" style={{ width: "30%", margin: "0 auto" }}>
                <button
                  type="text"
                  className="form-control btn btn-primary mt-4"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
