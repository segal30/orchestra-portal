import React, { useContext } from "react";
import "./topbar.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Topbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">
              <img src={Logo} alt="logo" />
            </span>
          </Link>
        </div>
        <div className="topRight">
          Hi, {currentUser.displayName}
          <Link to="/user/:userId" style={{ textDecoration: "none" }}>
            <img src={currentUser.photoURL} alt="avatar" className="avatar" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
