import { BoardTable } from 'components/Table';
import { StoreState } from 'modules';
import { getScoreBoardAction } from 'modules/scoreBoard';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MainScoreBoard = () => {
  const dispatch = useDispatch();

  const { data, last } = useSelector(
    (state: StoreState) => state.scoreBoardState.boardList
  );

  const getScoreBoard = useCallback(
    (skip: number) => {
      dispatch(getScoreBoardAction.request({ skip: skip }));
    },
    [dispatch]
  );

  useEffect(() => {
    getScoreBoard(0);
  }, [dispatch]);

  return (
    <BoardTable boardData={data} last={last} getScoreBoard={getScoreBoard} />
  );
};

export default MainScoreBoard;
