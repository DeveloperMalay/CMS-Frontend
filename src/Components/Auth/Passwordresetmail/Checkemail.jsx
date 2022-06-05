import React from "react";
import "./Checkemail.scss";
import { MdEmail } from "react-icons/md";

const Checkemail = () => {
  return (
    <div className="checkemail_container">
      <div className="success-card">
        <div className="email-logo">
          <span>
            <MdEmail />
          </span>
        </div>
        <h1>Check your mail</h1>
        <p>We have sent a password recover instructions to your email.</p>
        <button>Open email app</button>
        <span>Skip,I'll confirm later</span>
        <div className="bottom_text">
          <p>
            Did not receive the email? Check your spam filter, or
            <span style={{ color: "var(--primary-color)", cursor: "pointer" }}>
              try another email address
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkemail;
