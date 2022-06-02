import React from "react";

const Passwordresetmail = () => {
  return (
    <div className="send_email">
      <form action="">
        <div className="form__container">
          <div className="form-item">
            <input
              type="text"
              name="email"
              value={data.new_password}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <label htmlFor="email">Confirm Password</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Passwordresetmail;
