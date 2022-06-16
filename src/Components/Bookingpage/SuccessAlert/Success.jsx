import React from "react";
import { images } from "../../../Constants";

const Success = () => {
  return (
    <div className="success">
      <div className="success_card">
        <span className="icon">
          <img src={images.success} alt="success-Gif" />
        </span>
        <div className="message">
          <span>Thank You for Booking!</span>
          <p>We will let you know when the Booking is Confirmed</p>
        </div>
      </div>
    </div>
  );
};

export default Success;
