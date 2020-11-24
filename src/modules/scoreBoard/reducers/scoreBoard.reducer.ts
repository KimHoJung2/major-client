// base
import produce from 'immer';
import { createReducer } from 'typesafe-actions';

// action
import {
  getScoreBoardAction,
  ScoreBoardAction
} from '../actions/scoreBoard.action';

export interface ResponseBoardList {
  text: string;
  key: number;
  name: string;
  title: string;
  _id: string;
  date?: string;
  created?: Date;
}

export interface ScoreBoardState {
  boardList: {
    data: ResponseBoardList[];
    last: boolean;
  };
}

// reducers
const initialState: ScoreBoardState = {
  boardList: {
    data: [],
    last: false
  }
};

export const scoreBoardReducer = createReducer<
  ScoreBoardState,
  ScoreBoardAction
>(initialState).handleAction(getScoreBoardAction.success, (state, action) =>
  produce(state, draft => {
    const data = action.payload;
    if (data.length < 1) {
      draft.boardList.last = false;
    } else {
      draft.boardList.last = true;
    }
    draft.boardList.data = [...state.boardList.data, ...data];
  })
);
