import React from "react";
import "./Home.scss";
import { BsPersonCircle, BsFillPersonFill } from "react-icons/bs";
import { AiTwotoneEnvironment } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Greeting from "../Greeting/Greeting";
const Home = () => {
  return (
    <div className="home__container">
      <div className="greeting_message">
        <Greeting />
      </div>
      {/* <header>
        <h1>Hair Salons</h1>
      </header> */}

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
                {/* <AiTwotoneEnvironment /> */}
                <GoLocation />
              </span>
              <span>Ranaghat</span>
            </div>
          </div>
          <div className="open_time">
            <p>8.00am - 8.30am</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
