// base
import React, { useEffect } from 'react';

//package
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { StoreState } from 'modules';
import { ROUTE_MAINSCORE } from 'routes/const';

//container
import { Login } from 'containers';

//images
import Logo from 'assets/images/logo.png';

const StyledLogin = styled.div`
  background: #5f5f5f;
  height: 100%;
`;

const LoginPage = () => {
  const { isLogin } = useSelector((state: StoreState) => state.authState);

  const history = useHistory();

  useEffect(() => {
    if (isLogin) {
      history.push(ROUTE_MAINSCORE);
    }
  }, [isLogin, history]);

  return (
    <StyledLogin>
      <img src={Logo} alt='' style={{ width: '100%', marginTop: '10vh' }} />
      <Login />
    </StyledLogin>
  );
};

export default LoginPage;
