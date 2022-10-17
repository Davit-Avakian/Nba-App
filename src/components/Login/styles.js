import styled from 'styled-components';

export const LoginTitle = styled.div`
  img {
    height: 2.112rem;
  }

  h1 {
    margin-bottom: 1.5rem;
    font-size: 3rem;
    line-height: 80%;
    text-transform: uppercase;
    font-family: titleFont;
  }
`;

export const LoginForm = styled.form`
  background-color: ${({ theme: { containerBgColor } }) => containerBgColor};
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  border-radius: 0.5rem;

  label {
    color: grey;
    font-size: 0.8rem;
  }

  & a:last-child {
    cursor: pointer;
    align-self: center;
    margin-top: 2rem;
    text-decoration: underline;
    color: #000;
    font-size: 1.1rem;
  }
`;

export const ForgotLink = styled.a`
  cursor: pointer;
  text-decoration: underline;
  color: #010101;
  align-self: flex-end;
  font-size: 1rem;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid grey;
  display: block;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline-offset: 2px;
  font-family: Roboto, Arial, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: #000;
  background-color: transparent;
  line-height: 120%;
  padding-bottom: 0.5rem;
  padding-left: 0;
  border-radius: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0.5rem;
  margin-bottom: 2rem;

  &:focus {
    outline: none;
  }
`;

export const Error = styled.p`
  color: red;
  align-self: center;
  font-size: large;
  margin-bottom: 1rem;
`;

export const SignInBtn = styled.button`
  background-color: #191c23;
  border-color: transparent;
  color: #fff;
  padding: 1rem;
  font-size: 1rem;
  margin: 0 auto;
  width: calc(100% - 3rem);
  border: 1px solid transparent;
  border-radius: 0.2rem;

  &:hover {
    background-color: #ffff;
    color: black;
    border: 1px solid black;
  }
`;

export const LoginContainer = styled.div`
  width: 30%;
  height: 29rem;
  margin: 7rem auto;

  @media (max-width: 1000px) {
    margin: 7rem 5rem;
    width: 70%;

    ${LoginTitle} h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 600px) {
    margin: 7rem 1rem;
  }
`;
