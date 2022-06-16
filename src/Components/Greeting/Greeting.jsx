import React, { useState } from "react";
import "./Greeting.scss";
import { images } from "../../Constants";
import { useEffect } from "react";

const Greeting = () => {
  const [greetmessage, setgreetMessage] = useState();

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
  // let hour = d.getHours();

  // if (hour < 12) {
  //   setgreetMessage("Morning");
  //   console.log("Good Morning");
  // } else if (hour > 12 && hour < 17) {
  //   setgreetMessage("Afternoon");
  //   console.log("Good Afternoon");
  // } else {
  //   setgreetMessage("Evening");
  //   console.log("Good Evening");
  // }

  useEffect(() => {
    let hour = d.getHours();
    if (hour < 12) {
      setgreetMessage("Morning");
      console.log("Good Morning");
    } else if (hour < 18) {
      setgreetMessage("Afternoon");
      console.log("Good Afternoon");
    } else {
      setgreetMessage("Evening");
      console.log("good evening");
    }
  }, [greetmessage]);

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
          <h1> Good {greetmessage},Username</h1>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
