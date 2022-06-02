import React from "react";
import "./Notification.scss";

const Notification = () => {
  return (
    <div className="notification_container">
      <h1>Notifications</h1>
      <div className="notifications">
        <div className="today">
          <span>No notification yet</span>
        </div>
        <div className="earlier">
          <span>You login successfully</span>
        </div>
      </div>
    </div>
  );
};

export default Notification;
