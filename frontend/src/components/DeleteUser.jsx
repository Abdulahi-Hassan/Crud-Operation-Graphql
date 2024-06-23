import { useMutation } from "@apollo/client";
import { Deleteuser } from "../Apollo-Client";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
const DeleteUser = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [MyMutation] = useMutation(Deleteuser);
  let {error}=MyMutation({
    variables: {
      ID: id,
    },
  });
  toast.success("Successfully Delete User");
  navigate("/user");
 
};

export default DeleteUser;
