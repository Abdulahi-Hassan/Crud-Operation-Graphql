import { useMutation, useSubscription } from "@apollo/client";
import { Link } from "react-router-dom";
import moment from "moment";
import { GetAllUsers } from "./subscriptions";
import { Deleteuser } from "../Apollo-Client";
import toast from "react-hot-toast";
const User = () => {
  const [MyMutation] = useMutation(Deleteuser);
  const { data, loading, error } = useSubscription(GetAllUsers);
  localStorage.setItem("users", JSON.stringify(data));

  if (error) return alert(error.message);
  if (loading) return <h1 className="text-center mt-4">Loading </h1>;

  const HandleDelete = (id) => {
    MyMutation({
      variables: {
        ID: id,
      },
    });
    toast.success("Successfully Delete User");
  };
  return (
    <div className="container" style={{ marginTop: "100px", padding: "0 4%" }}>
      |
      <Link to={`/createuser`} className="btn btn-info mx-2">
        Create +
      </Link>
      <table className="table  text-center mt-5">
        <thead>
          <tr>
            <th>Profile</th>
            <th>UserName</th>
            <th>Password</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.User.map((data, index) => (
            <tr key={index} style={{ position: "relative" }}>
              <td>
                {
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/updateuser/${data.ID}`}
                  >
                    {
                      <img
                        src={data.Profile}
                        width="60"
                        style={{
                          borderRadius: "50%",
                          position: "absolute",
                          left: "0px",
                          padding: "10px",
                          top: "0",
                        }}
                        height="60"
                        alt=""
                      />
                    }
                  </Link>
                }
              </td>
              <td>
                {
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/updateuser/${data.ID}`}
                  >
                    {data.UserName}
                  </Link>
                }
              </td>

              <td>
                {
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/updateuser/${data.ID}`}
                  >
                    {data.Password}
                  </Link>
                }
              </td>
              <td>{moment(data.Date).format("l")}</td>

              <td>
                {
                  <div>
                    <button
                      onClick={() => HandleDelete(data.ID)}
                      className="btn btn-danger mx-2"
                    >
                      Delete
                    </button>
                  </div>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
