import { AxiosError } from 'axios';
import { ActionType, createAsyncAction } from 'typesafe-actions';
import {
  CreateScore,
  ResponseAttendUserList,
  ResponseBoardList,
  ResponseScoreList
} from '../models/scoreBoard.model';

const GET_SCORE_BOARD_REQUEST = 'SCORE_BOARD/GET_SCORE_BOARD_REQUEST';
const GET_SCORE_BOARD_SUCCESS = 'SCORE_BOARD/GET_SCORE_BOARD_SUCCESS';
const GET_SCORE_BOARD_FAILURE = 'SCORE_BOARD/GET_SCORE_BOARD_FAILURE';

const GET_ATTEND_USER_REQUEST = 'ATTEND/GET_ATTEND_USER_REQUEST';
const GET_ATTEND_USER_SUCCESS = 'ATTEND/GET_ATTEND_USER_SUCCESS';
const GET_ATTEND_USER_FAILURE = 'ATTEND/GET_ATTEND_USER_FAILURE';

const POST_ATTEND_USER_REQUEST = 'ATTEND/POST_ATTEND_USER_REQUEST';
const POST_ATTEND_USER_SUCCESS = 'ATTEND/POST_ATTEND_USER_SUCCESS';
const POST_ATTEND_USER_FAILURE = 'ATTEND/POST_ATTEND_USER_FAILURE';

const DELETE_ATTEND_USER_REQUEST = 'ATTEND/DELETE_ATTEND_USER_REQUEST';
const DELETE_ATTEND_USER_SUCCESS = 'ATTEND/DELETE_ATTEND_USER_SUCCESS';
const DELETE_ATTEND_USER_FAILURE = 'ATTEND/DELETE_ATTEND_USER_FAILURE';

const CREATE_BOARD_REQUEST = 'BOARD/CREATE_BOARD_REQUEST';
const CREATE_BOARD_SUCCESS = 'BOARD/CREATE_BOARD_SUCCESS';
const CREATE_BOARD_FAILURE = 'BOARD/CREATE_BOARD_FAILURE';

const UPDATE_BOARD_REQUEST = 'BOARD/UPDATE_BOARD_REQUEST';
const UPDATE_BOARD_SUCCESS = 'BOARD/UPDATE_BOARD_SUCCESS';
const UPDATE_BOARD_FAILURE = 'BOARD/UPDATE_BOARD_FAILURE';

const BOARD_STATE_REQUEST = 'BOARD/BOARD_STATE_REQUEST';
const BOARD_STATE_SUCCESS = 'BOARD/BOARD_STATE_SUCCESS';
const BOARD_STATE_FAILURE = 'BOARD/BOARD_STATE_FAILURE';

const GET_SCORE_REQUEST = 'SCORE/GET_SCORE_REQUEST';
const GET_SCORE_SUCCESS = 'SCORE/GET_SCORE_SUCCESS';
const GET_SCORE_FAILURE = 'SCORE/GET_SCORE_FAILURE';

const CREATE_SCORE_REQUEST = 'SCORE/CREATE_SCORE_REQUEST';
const CREATE_SCORE_SUCCESS = 'SCORE/CREATE_SCORE_SUCCESS';
const CREATE_SCORE_FAILURE = 'SCORE/CREATE_SCORE_FAILURE';

export const getScoreBoardAction = createAsyncAction(
  GET_SCORE_BOARD_REQUEST,
  GET_SCORE_BOARD_SUCCESS,
  GET_SCORE_BOARD_FAILURE
)<{ skip: number }, { data: ResponseBoardList[]; skip: number }, AxiosError>();

export const getAttendUserListAction = createAsyncAction(
  GET_ATTEND_USER_REQUEST,
  GET_ATTEND_USER_SUCCESS,
  GET_ATTEND_USER_FAILURE
)<{ boardId: string }, ResponseAttendUserList[], AxiosError>();

export const postAttendUserAction = createAsyncAction(
  POST_ATTEND_USER_REQUEST,
  POST_ATTEND_USER_SUCCESS,
  POST_ATTEND_USER_FAILURE
)<
  { boardId: string; username: string | undefined },
  ResponseAttendUserList,
  AxiosError
>();

export const deleteAttendUserAction = createAsyncAction(
  DELETE_ATTEND_USER_REQUEST,
  DELETE_ATTEND_USER_SUCCESS,
  DELETE_ATTEND_USER_FAILURE
)<{ boardId: string; username: string | undefined }, '', AxiosError>();

export const createBoardAction = createAsyncAction(
  CREATE_BOARD_REQUEST,
  CREATE_BOARD_SUCCESS,
  CREATE_BOARD_FAILURE
)<
  { title: string; text: string; name: string | undefined; key: number },
  '',
  AxiosError
>();

export const updateBoardAction = createAsyncAction(
  UPDATE_BOARD_REQUEST,
  UPDATE_BOARD_SUCCESS,
  UPDATE_BOARD_FAILURE
)<
  {
    title: string;
    text: string;
    id: string;
  },
  '',
  AxiosError
>();

export const boardStateAction = createAsyncAction(
  BOARD_STATE_REQUEST,
  BOARD_STATE_SUCCESS,
  BOARD_STATE_FAILURE
)<{ state: string }, { state: string }, AxiosError>();

export const getScoreAction = createAsyncAction(
  GET_SCORE_REQUEST,
  GET_SCORE_SUCCESS,
  GET_SCORE_FAILURE
)<{ id: string }, ResponseScoreList[], AxiosError>();

export const createScoreAction = createAsyncAction(
  CREATE_SCORE_REQUEST,
  CREATE_SCORE_SUCCESS,
  CREATE_SCORE_FAILURE
)<CreateScore, '', AxiosError>();

const actions = {
  getScoreBoardAction,
  getAttendUserListAction,
  postAttendUserAction,
  deleteAttendUserAction,
  createBoardAction,
  updateBoardAction,
  boardStateAction,
  getScoreAction,
  createScoreAction
};

export type ScoreBoardAction = ActionType<typeof actions>;
