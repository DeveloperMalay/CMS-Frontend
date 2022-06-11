import React from "react";
import { images } from "../../Constants";
import { BsFillGeoAltFill } from "react-icons/bs";
import "./customerprofile.scss";

const CustomerProfile = () => {
  const d = new Date();
  const time = d.toLocaleString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="customer_profile">
      <div className="customer_profile-details">
        <div className="customer_profile-pic">
          <img src={images.profile_image} alt="" />
        </div>
        <div className="name">
          <span>Malay Pandit</span>
        </div>
        <div className="address">
          <p>
            <span>
              <BsFillGeoAltFill />
            </span>
            Ranaghat,India - {time}
          </p>
        </div>
        <div className="phone">
          <span>1232687586</span>
        </div>
        <div className="wp-no">
          <span>5236565468</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;