import React, { useContext } from "react";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import { AuthContext } from "../../../context/AuthContext";
import "./navbar.scss";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="chatNavbar">
      <span className="navLogo"><Diversity1Icon /></span>
      <div className="navUser">
        <span className="navName">{currentUser.displayName}</span>
        <img className="navImg" src={currentUser.photoURL} alt="navImg" />
      </div>
    </div>
  );
};

export default Navbar;
