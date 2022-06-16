import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.scss";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showpassword, setShowpassword] = useState(true);

  const Show = () => {
    setShowpassword(!showpassword);
  };
  const handleChange = (event) => {
    setFormData((predata) => {
      return { ...predata, [event.target.name]: event.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      navigate("/welcome");
    }, [200]);
    console.log(formData);
  };

  let navigate = useNavigate();
  return (
    <div className="SignUp">
      <span className="main-header">Welcome! to MySalon</span>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2 }}
      >
        <form onSubmit={handleSubmit}>
          <div className="form__container">
            <header>
              <h1>SignUp</h1>
            </header>

            <div className="form-item">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              <label htmlFor="username"> Username*</label>
            </div>
            <div className="form-item">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              <label htmlFor="email"> Email*</label>
            </div>
            <div className="form-item">
              <input
                type={showpassword ? "password" : "text"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="off"
                required
              />

              <label htmlFor="password"> Password*</label>
              <span className="password-icon" onClick={Show}>
                {showpassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            <div className="btn">
              <button>SignUp</button>
            </div>
            <div className="log-in">
              <span>Already have an Account?</span>
              <span
                className="link"
                onClick={() => {
                  setTimeout(() => {
                    navigate("/login");
                  }, [200]);
                }}
              >
                Login
              </span>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SignUp;
