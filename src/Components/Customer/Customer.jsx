import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../Constants";
import "./Customer.scss";

const Customer = () => {
  const navigate = useNavigate();

  const [customerData, setCustomerData] = useState({
    profilePic: images.profile_image,
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(customerData);
    navigate("/home");
  };
  return (
    <div className="customer__container">
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
                accept="image/*"
                multiple="false"
                onChange={handleChange}
                // value={customerData.profilePic}
              />
              <div>
                <img src={customerData.profilePic} />
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
    </div>
  );
};

export default Customer;
