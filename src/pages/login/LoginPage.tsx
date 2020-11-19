// base
import React from 'react';

//package
import styled from 'styled-components';

//container
import { Login } from 'containers';

//images
import Logo from 'assets/images/logo.png';

const StyledLogin = styled.div`
  background: #5f5f5f;
  height: 100%;
`;

const LoginPage = () => {
  return (
    <StyledLogin>
      <img src={Logo} alt='' style={{ width: '100%', marginTop: '10vh' }} />
      <Login />
    </StyledLogin>
  );
};

export default LoginPage;
