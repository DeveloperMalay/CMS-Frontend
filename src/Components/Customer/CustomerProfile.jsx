import React, { useState } from "react";
import { images } from "../../Constants";
import { BsFillGeoAltFill } from "react-icons/bs";
import "./customerprofile.scss";
import { motion } from "framer-motion";
import { BsFillPlusCircleFill } from "react-icons/bs";

const CustomerProfile = () => {
  const [imagepreview, setImagePreview] = useState();

  // to change profile picture
  const handleImagechange = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const d = new Date();
  const time = d.toLocaleString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="customer_profile">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <div className="customer_profile-details">
          <div className="profile_pic">
            <input
              type="file"
              name="profilePic"
              accept=".png, .jpg, .jpeg"
              multiple={false}
              onChange={handleImagechange}
            />
            <span>
              <BsFillPlusCircleFill />
            </span>
            <div className="previewPic">
              <img src={!imagepreview ? images.profile_image : imagepreview} />
            </div>
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
        </div>
      </motion.div>
    </div>
  );
};

export default CustomerProfile;
