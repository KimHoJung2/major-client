import {
  MainScoreBoardDetailPage,
  MainScoreBoardPage,
  UserInfoPage
} from 'pages';
import {
  ROUTE_MAINSCORE,
  ROUTE_MAINSCORE_DETAIL,
  ROUTE_USERINFO
} from './const';

interface RoutesOption {
  path: string;
  component: React.FunctionComponent;
}

export const routes: RoutesOption[] = [
  {
    path: ROUTE_MAINSCORE,
    component: MainScoreBoardPage
  },
  {
    path: ROUTE_MAINSCORE_DETAIL,
    component: MainScoreBoardDetailPage
  },
  {
    path: ROUTE_USERINFO,
    component: UserInfoPage
  }
];
