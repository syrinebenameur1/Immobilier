import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import noAvatarImage from "./../../../public/noavatar.jpg"


function Navbar() {
  const [open, setOpen] = useState(false);

  const {currentUser} = useContext(AuthContext);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="https://www.shutterstock.com/image-vector/house-logo-template-design-vector-600nw-741515455.jpg" alt="" />
          <span>TrustHome</span>
        </a>

        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>

      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img
              src={currentUser ? currentUser.avatar : noAvatarImage}
              alt=""
            />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
          <div className="sign">
            <a href="/login">Sign in</a>
            <a href="/register" className="register">
              Sign up
            </a>
            </div>
          </>
        )}
        <div className="menuIcon">
          <img
            src={currentUser ? currentUser.avatar : "/noavatar.jpg"}
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/register">Sign in</a>
          <a href="/login">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
