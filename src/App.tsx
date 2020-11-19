import React from 'react';

//packages
import styled from 'styled-components';
import { Route, Switch } from 'react-router';

//components
import { NotFoundResult } from 'components';
import { LoginPage } from 'pages';
import { routes } from 'routes';

const StyledApp = styled.div`
  height: 100vh;
`;

const App = () => {
  return (
    <StyledApp>
      <Switch>
        <Route path='/' exact component={LoginPage} />
        {routes.map((item, index) => {
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
