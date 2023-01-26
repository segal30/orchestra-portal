import React from "react";
import "./dashboard.css";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import ChatWidget from "../../chatWidget/ChatWidget";


function Dashboard() {
  return (
   
    <div className="dashboard">
      <FeaturedInfo />
      <div className="dashboardWidgets">
        <ChatWidget />
      </div>
    </div>
    
  );
}

export default Dashboard;
