import React, { useState } from "react";

const Resetpassword = () => {
  const [data, setdata] = useState({
    previous_password: "",
    new_password: "",
  });

  const handleChange = (e) => {
    setdata((prev) => {
      return { ...prev, [e.target.value]: e.target.name };
    });
  };
  return (
    <div className="reset">
      <form>
        <div className="form__container">
          <div className="form-item">
            <input
              type="text"
              name="previous_password"
              value={data.previous_password}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <label htmlFor="previous_password"> Previous Password</label>
          </div>
          <div className="form-item">
            <input
              type="text"
              name="new_password"
              value={data.new_password}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <label htmlFor="new_password">Confirm Password</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Resetpassword;
