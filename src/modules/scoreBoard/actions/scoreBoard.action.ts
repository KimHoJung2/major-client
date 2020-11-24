import { AxiosError } from 'axios';
import { ActionType, createAsyncAction } from 'typesafe-actions';
import { ResponseBoardList } from '../reducers/scoreBoard.reducer';

const GET_SCORE_BOARD_REQUEST = 'SCORE_BOARD/GET_SCORE_BOARD_REQUEST';
const GET_SCORE_BOARD_SUCCESS = 'SCORE_BOARD/GET_SCORE_BOARD_SUCCESS';
const GET_SCORE_BOARD_FAILURE = 'SCORE_BOARD/GET_SCORE_BOARD_FAILURE';

export const getScoreBoardAction = createAsyncAction(
  GET_SCORE_BOARD_REQUEST,
  GET_SCORE_BOARD_SUCCESS,
  GET_SCORE_BOARD_FAILURE
)<{ skip: number }, ResponseBoardList[], AxiosError>();

const actions = {
  getScoreBoardAction
};

export type ScoreBoardAction = ActionType<typeof actions>;
