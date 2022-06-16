import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./bookingpage.scss";
import { motion } from "framer-motion";
import Success from "./SuccessAlert/Success";

const Bookingpage = () => {
  const [inputDate, setInputDate] = useState(new Date());
  const [displaysuccesAlert, setDisplaySuccessAlert] = useState("none");
  console.log(displaysuccesAlert);
  const booksuccess = () => {
    setDisplaySuccessAlert("block");
    // setTimeout(() => {
    //   alert("booking successful");
    // }, 1000);
  };

  const timeslot = [
    "9:00 am",
    "10:00 am",
    "11:00 am",
    "12:00 am",
    "1:00 pm",
    "2:00 pm",
    "3:00 pm",
    "6:00 pm",
    "7:00 pm",
    "8:00 pm",
    "9:00 pm",
  ];

  function handle() {
    console.log("10:00am");
  }
  return (
    <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 2 }}>
      <div className="bookingpage">
        <div className="calender">
          <Calendar onChange={setInputDate} value={inputDate} />
        </div>
        <div className="booked-timeslots">
          <div className="timeslots">
            {timeslot.map((elem) => {
              return <input type="button" value={elem} onClick={handle} />;
            })}
          </div>
          <div className="apoinment" onClick={booksuccess}>
            <button>Book Appoinment</button>
          </div>
        </div>
      </div>
      <div className="alert" style={{ display: "none" }}>
        <Success />
      </div>
    </motion.div>
  );
};

export default Bookingpage;
