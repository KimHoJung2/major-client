//base
import React from 'react';

// package
import styled from 'styled-components';

// import Logo from 'assets/images/logo.png';
//container
import { SignUp } from 'containers';

const StyledSignUp = styled.div`
  background: #5f5f5f;
  height: 100%;

  h1 {
    text-align: center;
    color: #00bdb7;
    padding-top: 10vh;
  }
`;

const SignUpPage = () => {
  return (
    <StyledSignUp>
      <h1>MAJOR 회원가입</h1>
      <SignUp />
    </StyledSignUp>
  );
};

export default SignUpPage;
