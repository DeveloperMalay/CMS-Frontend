import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../Constants";
import "./Customer.scss";
import { motion } from "framer-motion";
import { BsFillPlusCircleFill } from "react-icons/bs";

const Customer = () => {
  const navigate = useNavigate();

  const [imagepreview, setImagePreview] = useState();
  const [customerData, setCustomerData] = useState({
    age: "",
    gender: "",
    phone: "",
    whatsapp: "",
  });

  const handleChange = (event) => {
    setCustomerData((predata) => {
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
    console.log(customerData);
    navigate("/home");
   
  }; 

  return (
    <div className="customer__container">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2 }}
      >
        <div className="customer_details">
          <div className="vector_image">
            <img src={images.personaldata_image} />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="personal_data">
              <div className="heading">
                <h1>Personal Details</h1>
              </div>
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
                  <img
                    src={!imagepreview ? images.profile_image : imagepreview}
                  />
                </div>
              </div>
              <div className="number age">
                <input
                  type="text"
                  name="age"
                  onChange={handleChange}
                  value={customerData.age}
                  required
                />
                <label htmlFor="age">Age</label>
              </div>
              <div className="gender">
                <select
                  name="gender"
                  titie="Gender"
                  onChange={handleChange}
                  value={customerData.gender}
                  required
                >
                  <option value="">--Gender--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="number phone">
                <input
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                  value={customerData.phone}
                  required
                />
                <label htmlFor="phone">Phone</label>
              </div>
              <div className="number whatsapp">
                <input
                  type="tel"
                  name="whatsapp"
                  onChange={handleChange}
                  value={customerData.whatsapp}
                  required
                />
                <label htmlFor="whatsapp">Whatsapp</label>
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

export default Customer;
