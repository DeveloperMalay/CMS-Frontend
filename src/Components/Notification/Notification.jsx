import React from "react";
import "./Notification.scss";

const Notification = () => {
  return (
    <div className="notification_container">
      <h2>Notifications</h2>
      <div className="notifications">
        <div className="today">
          <h4>Today</h4>
          <span>No notification yet</span>
        </div>
        <div className="earlier">
          <h4>Preious</h4>
          <span>You login successfully</span>
        </div>
      </div>
    </div>
  );
};

export default Notification;
