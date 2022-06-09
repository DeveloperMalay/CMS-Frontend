import React from "react";
import "./Footer.scss";
import { useNavigate } from "react-router-dom";
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer_container">
      <div className="social-links">
        <div className="social-links-header">
          <h4>Follow Us</h4>
        </div>
        <div className="social-media">
          <span
            style={{ color: "#4267B2", cursor: "pointer", fontSize: "30px" }}
          >
            <BsFacebook />
          </span>
          <span className="instagram">
            <BsInstagram />
          </span>
          <span style={{ color: "red", cursor: "pointer", fontSize: "30px" }}>
            <BsYoutube />
          </span>
          <span
            style={{ color: "#00acee ", cursor: "pointer", fontSize: "30px" }}
          >
            <BsTwitter />
          </span>
        </div>
      </div>
      <div className="footer-row2">
        <div className="location">
          <h3>Google Maps Section</h3>
        </div>
        <div className="contact">
          <ul>
            <li>About Us </li>
            <li>Feedback</li>
            <li>Community</li>
          </ul>
        </div>
        <div className="terms-condition">
          <ul>
            <li>Terms of Serice</li>
            <li>Privacy Policy</li>
            <li>Help & Support</li>
          </ul>
        </div>

        <div className="menu">
          <ul>
            <li
              onClick={() => {
                navigate("/home");
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/home/notification");
              }}
            >
              Notificaton
            </li>
            <li
              onClick={() => {
                navigate("/home/shopprofile");
              }}
            >
              Profile
            </li>
            <li
              // onClick={() => {
              //   navigate("/home/search");
              // }}
            >
              Search
            </li>
          </ul>
        </div>
      </div>

      <div className="copy-right">
        <span>@2022 MySalon.com</span>
      </div>
    </div>
  );
};

export default Footer;
