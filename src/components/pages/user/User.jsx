import React from "react";
import "./user.css";
import avatarPic from "../../../assets/david_segal.jpg";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CakeIcon from "@mui/icons-material/Cake";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import TimerIcon from "@mui/icons-material/Timer";
import EmailIcon from "@mui/icons-material/Email";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={avatarPic} alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">David Segal</span>
              <span className="userShowUserTitle">Double bass</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Employee details</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">segal30</span>
            </div>
            <div className="userShowInfo">
              <CakeIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Jenuary 17th, 1986</span>
            </div>
            <div className="userShowInfo">
              <EmailIcon className="userShowIcon" />
              <span className="userShowInfoTitle">segal30@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocalPhoneIcon className="userShowIcon" />
              <span className="userShowInfoTitle">+1 347 762 5465</span>
            </div>
            <div className="userShowInfo">
              <HomeIcon className="userShowIcon" />
              <span className="userShowInfoTitle">
                745 Lincoln Pl, Brooklyn, NY 11216
              </span>
            </div>
            <div className="userShowInfo">
              <TimerIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Oct' 2014</span>
            </div>
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
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={avatarPic}
                  alt="avatar-pic"
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
}
