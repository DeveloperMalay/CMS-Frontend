import React from "react";
import "./Navbar.scss";
import {  AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { Outlet } from "react-router-dom";
import { MdCircleNotifications } from "react-icons/md";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">MySalon</div>

        <div className="search">
          <input type="search" name="search" required />
          <label htmlFor="search">Search</label>
          <span>
            <AiOutlineSearch />
          </span>
        </div>
        <div className="home">
          <span>
            <AiFillHome />
          </span>
          <p>Home</p>
        </div>
        <div className="notification">
          <span>
            {/* <AiFillBell /> */}
            <MdCircleNotifications />
          </span>
          <p>Notifications</p>
        </div>
        <div className="profile">
          <span>
            <BsPersonCircle />
          </span>
          <p>Profile</p>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
