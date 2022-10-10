import React from 'react';
import logoImg from 'assets/images/headerLogo.svg';
import { EmailContainer } from './styles';

/**
 *  Creates component for submitting emails
 *  @returns {component} SubmitEmail component
 */
const SubmitEmail = () => {
  return (
    <EmailContainer>
      <div>
        <img src={logoImg} alt="" />
      </div>

      <div>
        <p>Want every headline right at your fingertips? Sign up to receive NBA emails!</p>

        <form>
          <input type="email" required placeholder="Email address" />

          <button>Submit</button>
        </form>

        <p>
          By clicking Submit, you agree to the Terms and Conditions and Privacy Policy. You agree
          that your personal information will be used to send you messages about NBA related
          products and services, and share your personal information with NBA partners and
          affiliates so that they can also contact you about products and services that might be of
          interest to you.
        </p>
      </div>
    </EmailContainer>
  );
};

export default SubmitEmail;
