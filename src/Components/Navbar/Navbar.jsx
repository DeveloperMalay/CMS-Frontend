import React from "react";
import "./Navbar.scss";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { Outlet, useNavigate } from "react-router-dom";
import { MdCircleNotifications } from "react-icons/md";
import Footer from "../Footer/Footer";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <div className="logo">MySalon</div>

        <div className="search">
          <input type="search" name="search" required />
          <label htmlFor="search">Search</label>
          <span
            onClick={() => {
              navigate("/home/search");
            }}
          >
            <AiOutlineSearch />
          </span>
        </div>
        <div
          className="home"
          onClick={() => {
            navigate("/home");
          }}
        >
          <span>
            <AiFillHome />
          </span>
          <p>Home</p>
        </div>
        <div
          className="notification"
          onClick={() => {
            navigate("/home/notification");
          }}
        >
          <span>
            {/* <AiFillBell /> */}
            <MdCircleNotifications />
          </span>
          <p>Notifications</p>
        </div>
        <div
          className="profile"
          onClick={() => {
            navigate("/home/shopprofile");
          }}
        >
          <span>
            <BsPersonCircle />
          </span>
          <p>Profile</p>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
