import React from "react";
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
              Ranaghat,India -{time} local time
            </p>
            {/* AiFillThunderbolt */}
            {/* HiOutlineStatusOffline */}
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
        <div className="add_details">
          <div className="input_timeslot">
            <label htmlFor="start-time">Start</label>
            <input type="time" name="start-time" placeholder="12:00 am" />
            <label htmlFor="end-time">End</label>
            <input type="time" name="end-time" />
          </div>
          <div className="serices">
            <p>Serices we provide</p>
            <ul>
              <li>hair cut</li>
              <li>hair wash</li>
              <li>shaving</li>
              <li>Neck massage</li>
              <li>Hair color</li>
            </ul>
          </div>
        </div>
        <div className="work_details">
          <ul>
            <li>
              <span>8:00 am - 9:00 am</span>
            </li>
            <li>
              <span>8:00 am - 9:00 am</span>
            </li>
            <li>
              <span>8:00 am - 9:00 am</span>
            </li>
            <li>
              <span>8:00 am - 9:00 am</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopProfile;
