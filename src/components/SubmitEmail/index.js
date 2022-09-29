import React from "react";
import "./styles.css";
import logoImg from "../../images/headerLogo.svg";

const SubmitEmail = () => {
  return (
    <div className="SubmitEmail-Container">
      <div>
        <img src={logoImg} alt="" />
      </div>

      <div>
        <p>
            Want every headline right at your fingertips? Sign up to receive NBA
            emails!
        </p>

        <input placeholder="Email address" />

        <button>Submit</button>

        <p>
          By clicking "Submit", you agree to the Terms and Conditions and
          Privacy Policy. You agree that your personal information will be used
          to send you messages about NBA related products and services, and
          share your personal information with NBA partners and affiliates so
          that they can also contact you about products and services that might
          be of interest to you.
        </p>
      </div>
    </div>
  );
};

export default SubmitEmail;
