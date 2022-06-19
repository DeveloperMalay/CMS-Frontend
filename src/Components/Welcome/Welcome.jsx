import React from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../Constants";
import "./Welcome.scss";
import { motion } from "framer-motion";

const Welcome = ({ setuser }) => {
  const navigate = useNavigate();
  return (
    <div className="welcome__container">
      <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{opacity:0}}
       transition={{ duration: 2 }}
      >
        <div className="welcome_card">
          <div className="welcome-image">
            <img src={images.welcome_image} alt="" />
          </div>
          <p> You are a </p>
          <div className="options">
            <button
              onClick={() => {
                navigate("/customerdata");
                setuser("customer");
              }}
            >
              Customer
            </button>
            <button
              onClick={() => {
                navigate("/serviceproviderdetails");
                setuser("suriceprovider");
              }}
            >
              Service Provider
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Welcome;
