import React, { useState } from "react";
import { images } from "../../Constants";
import "./ShopProfile.scss";
import { BsFillGeoAltFill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { HiOutlineStatusOnline, HiOutlineStatusOffline } from "react-icons/hi";


const ShopProfile = () => {
  const d = new Date();
  const time = d.toLocaleString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="shopProfile_container">
      <div className="shopprofile_details">
        <div className="profile-picture">
          <img src={images.profile_image} alt="" />
        </div>
        <div className="profile">
          <div className="profile_name">
            <h2>Test User Salon</h2>
          </div>
          <div className="address">
            <p>
              <span>
                <BsFillGeoAltFill />
              </span>
              Ranaghat,India - {time}
            </p>
          </div>
          <div className="make_inline_div">
            <div className="avalibility">
              <div>
                <HiOutlineStatusOnline />
              </div>
              <div>Available now</div>
            </div>
            <span className="edit-btn">
              <BiEdit />
            </span>
          </div>
        </div>
        <div className="setting-section">
          <button className="public-view">See Public View</button>
          <button className="setting">Profile Setting</button>
        </div>
      </div>

      <div className="details">
        <div className="available_slots">
          <header>
            <h3>Available Slots</h3>
          </header>
          <div className="time-slots">
            <button>10:00am - 11:00am</button>
            <button>10:00am - 11:00am</button>
            <button>10:00am - 11:00am</button>
            <button>10:00am - 11:00am</button>
            <button>10:00am - 11:00am</button>
            <button>10:00am - 11:00am</button>
            <button>10:00am - 11:00am</button>
          </div>
          <div className="timeslot_edit-btn">
            <span>
              <BiEdit />
            </span>
          </div>
        </div>

        <div className="serices_menu">
          <header>
            <h3>Services</h3>
          </header>
          <div className="services-list">
            <div className="service-item">
              <div className="title">Hair Cut</div>
              <div className="price">Rs.50</div>
            </div>

            <div className="service-item">
              <div className="title">Hair Cut</div>
              <div className="price">Rs.50</div>
            </div>

            <div className="service-item">
              <div className="title">Hair Cut</div>
              <div className="price">Rs.50</div>
            </div>

            <div className="service-item">
              <div className="title">Hair Cut</div>
              <div className="price">Rs.50</div>
            </div>

            <div className="service-item">
              <div className="title">Hair Cut</div>
              <div className="price">Rs.50</div>
            </div>

            <div className="service-item">
              <div className="title">Hair Cut</div>
              <div className="price">Rs.50</div>
            </div>
          </div>
        </div>
      </div>

      <div className="galary">
        <header>
          <h3>Image Galary</h3>
        </header>
        <div className="galary-image">
          <img src={images.hairstyle1} alt="" />
          <img src={images.hairstyle2} alt="" />
          <img src={images.hairstyle3} alt="" />
          <img src={images.hairstyle4} alt="" />
          <img src={images.hairstyle5} alt="" />
          <img src={images.hairstyle6} alt="" />
        </div>
        <span className="galary-btn">
          <BiEdit />
        </span>
      </div>
    </div>
  );
};

export default ShopProfile;

// const timeSlot = [
//   {
//     title: "",
//     start_time: "",
//     end_time: "",
//   },
// ];

// var title = [];
// var start_time = [];
// var end_time = [];
// const submit = (timeSlot) => {
//   timeSlot.preventDefault();
//   timeSlot.forEach((elem) => {
//     title.push(elem.id);
//     start_time.push(elem.start_time);
//     end_time.push(elem.end_time);
//   });
// };
// console.log(timeSlot);
