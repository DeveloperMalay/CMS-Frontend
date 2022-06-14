import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.scss";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";



const Login = () => {
  const [formData, setFormData] = useState({
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

  let navigate = useNavigate();
  return (
    <div className="login">
      <span className="main-header">Welcome! to MySalon</span>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2 }}
      >
        <form>
          <div className="form__container">
            <header>
              <h1>Login</h1>
            </header>
            <div className="form-item">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              <label htmlFor="username"> Email*</label>
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
            <Link to="/passwordresetmail" className="forget_password">
              <p>Forget Password?</p>
            </Link>
            <div
              className="btn"
              onClick={() => {
                navigate("/home");
              }}
            >
              <button>Login</button>
            </div>
            <div className="sign-in">
              <span>Don't have an Account?</span>
              <span
                className="link"
                onClick={() => {
                  navigate("/");
                }}
              >
                SignUp
              </span>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
