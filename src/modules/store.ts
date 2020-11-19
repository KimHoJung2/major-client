import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import reducer from './index';

export const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const store = createStore(
  reducer(history),
  composeWithDevTools({
    // NOTE: ui/PAGE_LOADER 액션을 확인하고 싶으면 아래 부분 주석 처리
  })(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
);

export default store;
