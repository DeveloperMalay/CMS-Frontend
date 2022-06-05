import React from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../Constants";
import "./Customer.scss";

const Customer = () => {
  const navigate = useNavigate();
  return (
    <div className="customer__container">
      <div className="customer_details">
        <div className="vector_image">
          <img src={images.personaldata_image} alt="" />
        </div>

        <form>
          <div className="personal_data">
            <div className="heading">
              <h1>Personal Details</h1>
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
            <div className="number age">
              <input type="text" name="age" required />
              <label htmlFor="age">Age</label>
            </div>
            <div className="gender">
              <select name="gender" required>
                <option value="">--Gender--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="number phone">
              <input type="tel" name="phone" required/>
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="number whatsapp">
              <input type="tel" name="whatsapp"  required/>
              <label htmlFor="whatsapp">Whatsapp</label>
            </div>
            <div className="btn">
              <button
                onClick={() => {
                  navigate("/home");
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

export default Customer;
