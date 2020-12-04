// base
import produce from 'immer';
import { createReducer } from 'typesafe-actions';

// action
import {
  getScoreBoardAction,
  getAttendUserListAction,
  ScoreBoardAction,
  boardStateAction,
  getScoreAction
} from '../actions/scoreBoard.action';
import { ScoreBoardState } from '../models/scoreBoard.model';

// reducers
const initialState: ScoreBoardState = {
  boardState: '',
  boardList: {
    data: [],
    last: false
  },
  attendList: {
    data: []
  },
  scoreList: {
    data: []
  }
};

export const scoreBoardReducer = createReducer<
  ScoreBoardState,
  ScoreBoardAction
>(initialState)
  .handleAction(getScoreBoardAction.success, (state, action) =>
    produce(state, draft => {
      const { data, skip } = action.payload;
      if (data.length < 1) {
        draft.boardList.last = false;
      } else {
        draft.boardList.last = true;
      }

      if (skip === 0) {
        draft.boardList.data = [...data];
      } else {
        draft.boardList.data = [...state.boardList.data, ...data];
      }
    })
  )
  .handleAction(getAttendUserListAction.success, (state, action) =>
    produce(state, draft => {
      const data = action.payload;
      draft.attendList.data = data;
    })
  )
  .handleAction(boardStateAction.success, (state, action) =>
    produce(state, draft => {
      const { state } = action.payload;
      draft.boardState = state;
    })
  )
  .handleAction(getScoreAction.success, (state, action) =>
    produce(state, draft => {
      let data = action.payload;
      data = data.sort((a, b) => b.allPin - a.allPin);
      data = data.map((arr, idx) => {
        arr.rank = idx + 1;
        arr.avg = parseInt(arr.avg).toFixed(1);
        return arr;
      });
      draft.scoreList.data = data;
    })
  );
