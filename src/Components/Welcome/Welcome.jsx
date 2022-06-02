import React from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../Constants";
import "./Welcome.scss";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome__container">
      <div className="welcome_card">
        <div className="welcome-image">
          <img src={images.welcome_image} alt="" />
        </div>
        <p> You are a </p>
        <div className="options">
          <button
            onClick={() => {
              navigate("/customerdata");
            }}
          >
            Customer
          </button>
          <button
            onClick={() => {
              navigate("/serviceproviderdetails");
            }}
          >
            Serice Proider
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
