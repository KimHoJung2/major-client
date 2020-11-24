// base
import { takeEvery, put } from 'redux-saga/effects';

// packages
import { ActionType } from 'typesafe-actions';
import { message } from 'antd';

// modules
import * as Actions from '../actions/scoreBoard.action';
import { scoreBoardAPI } from '../apis/scoreBoard.api';

function* getScoreBoard(
  action: ActionType<typeof Actions.getScoreBoardAction.request>
) {
  const { skip } = action.payload;

  try {
    const res = yield scoreBoardAPI.getScoreBoardList(skip);
    yield put(Actions.getScoreBoardAction.success(res));
  } catch (error) {
    yield put(Actions.getScoreBoardAction.failure(error));
    message.error(error);
  }
}

export function* scoreBoardSaga() {
  yield takeEvery(Actions.getScoreBoardAction.request, getScoreBoard);
}
