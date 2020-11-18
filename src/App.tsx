import React from 'react';

//packages
import styled from 'styled-components';
import { Route, Switch } from 'react-router';

//components
import { NotFoundResult } from 'components/NotFound/NotFoundResult';
const App = () => {
  const StyledApp = styled.div`
    height: 100vh;
  `;

  return (
    <StyledApp>
      <Switch>
        <Route path='*' component={NotFoundResult} />
      </Switch>
    </StyledApp>
  );
};

export default App;
