import MainScoreBoard from 'pages/mainScoreBoard/MainScoreBoard';
import { ROUTE_MAINSCORE } from './const';

interface RoutesOption {
  path: string;
  component: React.FunctionComponent;
}

export const routes: RoutesOption[] = [
  {
    path: ROUTE_MAINSCORE,
    component: MainScoreBoard
  }
];
