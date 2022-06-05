import React from "react";
import "./Greeting.scss";
import { images } from "../../Constants";

const Greeting = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let d = new Date();
  let monthName = months[d.getMonth()];
  let date = d.getDate();
  let day = days[d.getDay()];
  // const hour = d.toLocaleString([], { hour: "2-digit" });
  // let greetingMessage = "Good Morning";
  // if (hour < 12) {
  //   greetingMessage = "Good Afternoon";
  // } else if (hour > 12)
    return (
      <div className="greeting_container">
        <div className="greeting_card">
          <div className="greeting-image">
            <img src={images.greeting_image} alt="" />
          </div>
          <div className="greeting-speech">
            <span>
              {day}, {monthName} {date}
            </span>
            <h1>Good Afternoon,Username</h1>
          </div>
        </div>
      </div>
    );
};

export default Greeting;
