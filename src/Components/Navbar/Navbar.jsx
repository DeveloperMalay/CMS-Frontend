import React from "react";
import "./Navbar.scss";
import { AiOutlineSearch, AiFillHome, AiOutlineHome } from "react-icons/ai";
import { BsPersonCircle, BsSearch, BsPerson } from "react-icons/bs";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { MdCircleNotifications } from "react-icons/md";
import Footer from "../Footer/Footer";

const Navbar = ({ userindefier }) => {
  const navigate = useNavigate();

  const list = document.querySelectorAll(".list");

  function activeLink() {
    list.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
  }
  list.forEach((item) => {
    item.addEventListener("click", activeLink);
  });

  return (
    <>
      <nav className="navbar">
        <div
          className="logo"
          onClick={() => {
            navigate("/home");
          }}
        >
          MySalon
        </div>

        <div
          className="search"
          onFocus={() => {
            navigate("/home/search");
          }}
        >
          <input type="search" name="search" required />
          <label htmlFor="search">Search</label>
          <span>
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
            <MdCircleNotifications />
          </span>
          <p>Notifications</p>
        </div>
        <div
          className="profile"
          onClick={() => {
            userindefier === "customer"
              ? navigate("/home/customerprofile")
              : navigate("/home/shopprofile");
          }}
        >
          <span>
            <BsPersonCircle />
          </span>
          <p>Profile</p>
        </div>
      </nav>
      <div className="bottom-navigation">
        <ul>
          <li className="list active">
            <Link to="/home">
              <span className="icon">
                <AiOutlineHome />
              </span>
              <span className="text">Home</span>
            </Link>
          </li>
          <li className="list active">
            <Link to="/home/search">
              <span className="icon">
                <BsSearch />
              </span>
              <span className="text">Search</span>
            </Link>
          </li>
          <li className="list">
            <Link
              to={
                userindefier === "customer"
                  ? "/home/customerprofile"
                  : "/home/shopprofile"
              }
            >
              <span className="icon">
                <BsPerson />
              </span>
              <span className="text">Profile</span>
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;

{
  /* <div className="mobile-bottom-navbar">
  <ul>
    <li className="list active" onClick={activeLink}>
      <Link to="/home">
        <span className="icon">
          <AiOutlineHome />
        </span>
        <span className="text">Home</span>
      </Link>
    </li>
    <li className="list " onClick={activeLink}>
      <Link to="/home/search">
        <span className="icon">
          <BsSearch />
        </span>
        <span className="text">Search</span>
      </Link>
    </li>
    <li className="list" onClick={activeLink}>
      <Link
        to={
          userindefier === "customer"
            ? "/home/customerprofile"
            : "/home/shopprofile"
        }
      >
        <span className="icon">
          <BsPerson />
        </span>
        <span className="text">Profile</span>
      </Link>
    </li>
    <div className="indicator"></div>
  </ul>
</div> */
}
