import React from "react";
import "./Notification.scss";
import { motion } from "framer-motion";

const scaleVarient = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 2,
      ease: "easeIn",
    },
  },
};

const Notification = () => {
  return (
    <div className="notification_container">
      <h2>Notifications</h2>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
        style={{ width: "100%",display:"flex",justifyContent:'center' }}
      >
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
      </motion.div>
    </div>
  );
};

export default Notification;
