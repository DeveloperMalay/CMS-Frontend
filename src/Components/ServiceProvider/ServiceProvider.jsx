import React, { useState } from "react";
import "./ServiceProvider.scss";
import { images } from "../../Constants";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BsFillPlusCircleFill } from "react-icons/bs";

const ServiceProvider = () => {
  const [imagepreview, setImagePreview] = useState();
  const [shopdata, setShopData] = useState({
    shop_name: "",
    shop_address: "",
  });

  const handleChange = (event) => {
    setShopData((predata) => {
      return { ...predata, [event.target.name]: event.target.value };
    });
  };

  // to change profile picture
  const handleImagechange = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home/shopprofile");
  };
  const navigate = useNavigate();
  return (
    <div className="serviceprovider_container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="sericeproider_details">
          <div className="shop_vectorimage">
            <img src={images.shopdata_image} alt="vector-image" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="shop-data">
              <div className="heading">
                <h1>Shop Details</h1>
              </div>
              <div className="profile_pic">
                <input
                  type="file"
                  name="profile-picture"
                  accept="image/*"
                  multiple={false}
                  onChange={handleImagechange}
                />
                <span>
                  <BsFillPlusCircleFill />
                </span>
                <div className="previewPic">
                  <img
                    src={!imagepreview ? images.profile_image : imagepreview}
                  />
                </div>
              </div>
              <div className="shop name">
                <input
                  type="text"
                  name="shop_name"
                  value={shopdata.shop_name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="shop-name">Shop Name</label>
              </div>
              <div className="shop address">
                <input
                  type="text"
                  name="shop_address"
                  value={shopdata.shop_address}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="shop-address">Address</label>
              </div>
              <div className="btn">
                <button>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceProvider;
