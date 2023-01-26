import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import "./topbar.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";import LogoutIcon from "@mui/icons-material/Logout";

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
          <button onClick={() => signOut(auth)}>
            <LogoutIcon style={{ color: "black", height: '15px', backgroundColor: 'white' }} />
          </button>
          <Link to="/user/:userId" style={{ textDecoration: "none" }}>
            <img src={currentUser.photoURL} alt="avatar" className="avatar" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

