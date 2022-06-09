import React from "react";
import "./passwordresetemail.scss";
import { useNavigate } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";

const Passwordresetmail = () => {
  const navigate = useNavigate();
  return (
    <div className="send_email">
      <form action="">
        <div className="form__container">
          <div className="password_logo">
            <span>
              <RiLockPasswordFill />
            </span>
          </div>
          <header>
            <h1>Reset password</h1>
          </header>
          <p>
            Enter the email associated with your account and we,ll send an email
            with instructions to reset your password.
          </p>
          <div className="form-item">
            <input
              type="text"
              name="email"
              // value={data.new_password}
              // onChange={handleChange}
              autoComplete="off"
              required
            />
            <label htmlFor="email">Email </label>

            <div className="btn">
              <button
                onClick={() => {
                  navigate("/checkemail");
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Passwordresetmail;
