import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import axiosInstance from "../../axiosInstance/axios";

function Login() {
const [error,setError]=useState("");
const [isLoading,setisLoading]=useState(false);

const {updateUser} =useContext(AuthContext);


const navigate=useNavigate();
  const handleSubmit = async (e) => {
    setisLoading(true);
    e.preventDefault();
    const formData = new FormData (e.target);
const username= formData.get("username");
const password= formData.get("password");


try {
  const res = await axiosInstance.post("/auth/login", {
    username,
    password,
  });

  updateUser(res.data)

  navigate("/");
} catch (err) {
  setError(err.response.data.message);
} 
};
  

  return (


    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" required type="text" placeholder="Username" />
          <input name="password" required type="password" placeholder="Password" />
          <button disabled={isLoading} >Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form >
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
