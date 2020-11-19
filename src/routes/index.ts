//pages
import { SignUpPage } from 'pages';

//route
import { ROUTE_SIGN_UP } from './const';

interface RoutesOption {
  path: string;
  component: React.FunctionComponent;
}

export const routes: RoutesOption[] = [
  {
    path: ROUTE_SIGN_UP,
    component: SignUpPage
  }
];
