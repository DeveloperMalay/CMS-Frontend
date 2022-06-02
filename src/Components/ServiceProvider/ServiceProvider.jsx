import React from "react";
import "./ServiceProvider.scss";
import { images } from "../../Constants";
import { useNavigate } from "react-router-dom";

const ServiceProvider = () => {
  const navigate = useNavigate();
  return (
    <div className="serviceprovider_container">
      <div className="sericeproider_details">
        <div className="shop_vectorimage">
          <img src={images.shopdata_image} alt="" />
        </div>
        <form>
          <div className="shop-data">
            <div className="heading">
              <h1>Shop Details</h1>
            </div>
            <div className="profile_pic">
              <input
                type="file"
                name="profile-picture"
                accept="image/*"
                multiple="false"
              />
              <div>
                <img src={images.profile_image} />
              </div>
            </div>
            <div className="shop name">
              <input type="text" name="shop-name" required />
              <label htmlFor="shop-name">Shop Name</label>
            </div>
            <div className="shop address">
              <input type="text" name="shop-address" required />
              <label htmlFor="shop-address">Address</label>
            </div>
            <div className="btn">
              <button
                onClick={() => {
                  navigate("/home/shopprofile");
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceProvider;
