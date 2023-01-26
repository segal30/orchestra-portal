import React from "react";
import "./featuredInfo.css";
import CalendarWidget from "./CalendarWidget";
import InboxWidget  from "./InboxWidget"
import { Link } from "react-router-dom";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle"></span>
        <div className="featuredContainer">
          <Link to="/Inbox" className="link">
            <InboxWidget />
          </Link>

          <span className="featured"></span>
        </div>
        <span className="featuredSub"></span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle"></span>
        <div className="featuredContainer">
          <Link to="/Calendar" className="link">
            <CalendarWidget />
          </Link>
          <span className="featured"></span>
        </div>
        <span className="featuredSub"></span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
