import React, { useContext } from "react";
import "./user.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CakeIcon from "@mui/icons-material/Cake";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import TimerIcon from "@mui/icons-material/Timer";
import EmailIcon from "@mui/icons-material/Email";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";


const User = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle"></h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={currentUser.photoURL} alt="avatar" className="avatar" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">
                {currentUser.displayName}
              </span>
              <span className="userShowUserTitle">{}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Employee details</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{currentUser.userName}</span>
            </div>
            <div className="userShowInfo">
              <CakeIcon className="userShowIcon" />
              <span className="userShowInfoTitle">
                {currentUser.dateOfBirth}
              </span>
            </div>
            <div className="userShowInfo">
              <EmailIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{currentUser.email}</span>
            </div>
            <div className="userShowInfo">
              <LocalPhoneIcon className="userShowIcon" />
              <span className="userShowInfoTitle">
                {currentUser.phoneNumber}
              </span>
            </div>
            <div className="userShowInfo">
              <HomeIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{currentUser.address}</span>
            </div>
            <div className="userShowInfo">
              <TimerIcon className="userShowIcon" />
              <span className="userShowInfoTitle">
                {currentUser.memberSince}
              </span>
            </div>
          </div>
          <div className="logout">
            <button onClick={() => signOut(auth)}>Logout</button>
          </div>
        </div>

        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" placeholder="" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" placeholder="" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" placeholder="" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Phone Number</label>
                <input type="text" placeholder="" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" placeholder="" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Member Since</label>
                <input type="text" placeholder="" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Birthday</label>
                <input type="text" placeholder="" className="userUpdateInput" />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src={currentUser.photoURL}
                  alt="avatar"
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <PublishIcon className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
