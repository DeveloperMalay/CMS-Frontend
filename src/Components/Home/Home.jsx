import React from "react";
import "./Home.scss";
import {
  BsPersonCircle,
  BsFillPersonFill,
  BsFillTelephoneOutboundFill,
} from "react-icons/bs";

import { GoLocation } from "react-icons/go";
import Greeting from "../Greeting/Greeting";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home__container">
      <div className="greeting_message">
        <Greeting />
      </div>
      <div className="allcards">
        <div className="shopDetails_card">
          <div className="card">
            <div
              className="card__sec1"
              onClick={() => {
                navigate("/home/shopprofile");
              }}
            >
              <div className="profile">
                <span>
                  <BsPersonCircle />
                </span>
              </div>
              <div className="shop_name">
                <span>
                  <BsFillPersonFill />
                </span>
                <span>Ramesh Salon</span>
              </div>
              <div className="shop_address">
                <span>
                  <GoLocation />
                </span>
                <span>Ranaghat</span>
              </div>
              <div className="ph-number">
                <span>
                  <BsFillTelephoneOutboundFill />
                </span>
                <span>6546651681</span>
              </div>
            </div>
            <div
              className="open_time"
              onClick={() => {
                navigate("/home/bookingpage");
              }}
            >
              <p>8.00am - 8.30am</p>
            </div>
          </div>
        </div>

        <div className="shopDetails_card">
          <div className="card">
            <div className="card__sec1">
              <span className="profile">
                <BsPersonCircle />
              </span>
              <div className="shop_name">
                <span>
                  <BsFillPersonFill />
                </span>
                <span>Ramesh Salon</span>
              </div>
              <div className="shop_address">
                <span>
                  <GoLocation />
                </span>
                <span>Ranaghat</span>
              </div>
              <div className="ph-number">
                <span>
                  <BsFillTelephoneOutboundFill />
                </span>
                <span>6546651681</span>
              </div>
            </div>
            <div className="open_time">
              <p>8.00am - 8.30am</p>
            </div>
          </div>
        </div>

        <div className="shopDetails_card">
          <div className="card">
            <div className="card__sec1">
              <span className="profile">
                <BsPersonCircle />
              </span>
              <div className="shop_name">
                <span>
                  <BsFillPersonFill />
                </span>
                <span>Ramesh Salon</span>
              </div>
              <div className="shop_address">
                <span>
                  <GoLocation />
                </span>
                <span>Ranaghat</span>
              </div>
              <div className="ph-number">
                <span>
                  <BsFillTelephoneOutboundFill />
                </span>
                <span>6546651681</span>
              </div>
            </div>
            <div className="open_time">
              <p>8.00am - 8.30am</p>
            </div>
          </div>
        </div>

        <div className="shopDetails_card">
          <div className="card">
            <div className="card__sec1">
              <span className="profile">
                <BsPersonCircle />
              </span>
              <div className="shop_name">
                <span>
                  <BsFillPersonFill />
                </span>
                <span>Ramesh Salon</span>
              </div>
              <div className="shop_address">
                <span>
                  <GoLocation />
                </span>
                <span>Ranaghat</span>
              </div>
              <div className="ph-number">
                <span>
                  <BsFillTelephoneOutboundFill />
                </span>
                <span>6546651681</span>
              </div>
            </div>
            <div className="open_time">
              <p>8.00am - 8.30am</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
