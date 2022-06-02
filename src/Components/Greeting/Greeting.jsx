import React from "react";
import './Greeting.scss'
import { images } from "../../Constants";

const Greeting = () => {
  return (
    <div className="greeting_container">
      <div className="greeting_card">
        <div className="greeting-image">
          <img src={images.greeting_image}alt="" />
        </div>
        <div className="greeting-speech">
          <span>Thursday, June 2nd</span>
          <h1>Good Afternoon,Username</h1>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
