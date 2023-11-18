import React, { useState } from "react";
import "./styles/Number.css";
import Bluebtn from "./BlueBtn";
import "../OtpPage/styles/BlueBtn.css";
import Phone from "./Phone";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Number() {
  const { state } = useLocation();

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [OtpError, setOtpError] = useState("");

  function handleChange(element, index) {
    let value = element.value;
    if (isNaN(value)) return false;
    else if (value === "") {
      setOtpError("OTP is required");
      return false;
    }

    setOtp([...otp.map((d, idx) => (idx === index ? value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  }

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/productsState", { state: { name: state.name } });
  }
  return (
    <div>
      <form action="/" method="post" name="validtelephone">
        <div className="phone">
          <Phone phonenumber={state.phoneNumber} />
          <div className="otp-box">
            <div>
              {otp.map((data, index) => {
                return (
                  <input
                    type="text"
                    name="otp"
                    value={data}
                    key={index}
                    maxLength="1"
                    onChange={(e) => handleChange(e.target, index)}
                  />
                );
              })}
            </div>
            <small>{OtpError}</small>
          </div>
        </div>
        <Bluebtn text="RESEND OTP" img="" />
        <button className="blue-box sub" type="submit" onClick={handleSubmit}>
          <p className="blue-text">CONTINUE</p>
        </button>
      </form>
    </div>
  );
}

export default Number;
