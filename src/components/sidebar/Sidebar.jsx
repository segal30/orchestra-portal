import React from "react";
import "./sidebar.css";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import ContactsSharpIcon from "@mui/icons-material/ContactsSharp";
import AnnouncementSharpIcon from "@mui/icons-material/AnnouncementSharp";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active ">
                <DashboardSharpIcon className="sidebarIcon" />
                Dashboard
              </li>
            </Link>

            <Link to="/Calendar" className="link">
              <li className="sidebarListItem">
                <CalendarMonthSharpIcon className="sidebarIcon" />
                Calendar
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <Link to="/inbox" className="link">
              <li className="sidebarListItem">
                <AnnouncementSharpIcon className="sidebarIcon" />
                Mailbox
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Employees</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <ContactsSharpIcon className="sidebarIcon" />
                Members
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
