import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./bookingpage.scss";

const Bookingpage = () => {
  const [inputDate, setInputDate] = useState(new Date());
  const [inputtime, setInputTime] = useState();

  const booksuccess=()=>{
    setTimeout(() => {
      alert('booking successful')
    }, 1000);
  }
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
  );
};

export default Bookingpage;
