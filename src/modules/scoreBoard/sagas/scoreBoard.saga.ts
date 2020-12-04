// base
import { takeEvery, put, call } from 'redux-saga/effects';

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
    yield put(Actions.getScoreBoardAction.success({ data: res, skip: skip }));
  } catch (error) {
    yield put(Actions.getScoreBoardAction.failure(error));
    message.error(error);
  }
}

function* getAttendUser(
  action: ActionType<typeof Actions.getAttendUserListAction.request>
) {
  const { boardId } = action.payload;
  try {
    const res = yield scoreBoardAPI.getAttendUserList(boardId);
    yield put(Actions.getAttendUserListAction.success(res));
  } catch (error) {
    yield put(Actions.getAttendUserListAction.failure(error));
    message.error(error);
  }
}

function* postAttenUser(
  action: ActionType<typeof Actions.postAttendUserAction.request>
) {
  const { boardId, username } = action.payload;
  try {
    const res = yield scoreBoardAPI.postAttendUser(boardId, username);
    if (res.status) {
      return message.error(res.message);
    }
    message.success('신청 완료');
  } catch (error) {
    yield put(Actions.postAttendUserAction.failure(error));
    message.error(error);
  }
}

function* deleteAttenUser(
  action: ActionType<typeof Actions.deleteAttendUserAction.request>
) {
  const { boardId, username } = action.payload;
  try {
    const res = yield scoreBoardAPI.deleteAttendUser(boardId, username);
    if (res.status) {
      return message.error(res.message);
    }
    message.success('취소 완료');
  } catch (error) {
    yield put(Actions.deleteAttendUserAction.failure(error));
    message.error(error);
  }
}

function* createBoard(
  action: ActionType<typeof Actions.createBoardAction.request>
) {
  try {
    yield call(() => scoreBoardAPI.createBoard(action.payload));
    message.success('등록완료');
  } catch (error) {
    yield put(Actions.createBoardAction.failure(error));
    message.error(error);
  }
}

function* updateBoard(
  action: ActionType<typeof Actions.updateBoardAction.request>
) {
  try {
    yield call(() => scoreBoardAPI.updateBoard(action.payload));
    message.success('수정완료');
  } catch (error) {
    yield put(Actions.updateBoardAction.failure(error));
    message.error(error);
  }
}

function* stateBoard(
  action: ActionType<typeof Actions.boardStateAction.request>
) {
  try {
    yield put(Actions.boardStateAction.success(action.payload));
  } catch (error) {
    yield put(Actions.boardStateAction.failure(error));
    message.error(error);
  }
}

function* getScore(action: ActionType<typeof Actions.getScoreAction.request>) {
  try {
    const { id } = action.payload;
    const res = yield scoreBoardAPI.getScore(id);
    yield put(Actions.getScoreAction.success(res));
  } catch (error) {
    yield put(Actions.getScoreAction.failure(error));
  }
}

export function* scoreBoardSaga() {
  yield takeEvery(Actions.getScoreBoardAction.request, getScoreBoard);
  yield takeEvery(Actions.getAttendUserListAction.request, getAttendUser);
  yield takeEvery(Actions.postAttendUserAction.request, postAttenUser);
  yield takeEvery(Actions.deleteAttendUserAction.request, deleteAttenUser);
  yield takeEvery(Actions.createBoardAction.request, createBoard);
  yield takeEvery(Actions.updateBoardAction.request, updateBoard);
  yield takeEvery(Actions.boardStateAction.request, stateBoard);
  yield takeEvery(Actions.getScoreAction.request, getScore);
}
