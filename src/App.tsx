import React, { useEffect } from 'react';

//packages
import styled from 'styled-components';
import { Route, Switch } from 'react-router';

//components
import { NotFoundResult } from 'components';
import { LoginPage, SignUpPage } from 'pages';
import { routes } from 'routes';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from 'modules';
import { checkAuthencationAction } from 'modules/auth';

const StyledApp = styled.div`
  height: 100vh;
`;

const App = () => {
  const { isLogin } = useSelector((state: StoreState) => state.authState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogin === undefined) {
      dispatch(checkAuthencationAction.request());
    }
  }, [isLogin, dispatch]);
  return (
    <StyledApp>
      <Switch>
        <Route path='/' exact component={LoginPage} />
        <Route path='/signUp' exact component={SignUpPage} />
        {isLogin &&
          routes.map((item, index) => {
            return (
              <Route key={index} path={item.path} component={item.component} />
            );
          })}
        <Route path='*' component={NotFoundResult} />
      </Switch>
    </StyledApp>
  );
};

export default App;
