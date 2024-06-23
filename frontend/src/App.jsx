import UserCreate from "./components/CreateUser";
import { Route, Routes } from "react-router-dom";
import UserUpdate from "./components/UpdateUser";
import User from "./components/User";
import DeleteUser from "./components/DeleteUser";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Posts from "./components/Posts/Posts";
import NewPost from "./components/Posts/NewPost";
import PostUpdate from "./components/Posts/postupdate";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/createuser" element={<UserCreate />} />
        <Route path="/updateuser/:id" element={<UserUpdate />} />
        <Route path="/post/:id" element={<PostUpdate/>} />
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Posts />} />
        <Route path="/newposts" element={<NewPost />} />
        <Route path="/deleteuser/:id" element={<DeleteUser />} />
      </Routes>
      <Toaster />
    </div>
  );
}
export default App;
