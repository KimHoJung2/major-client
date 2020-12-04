import React, { useCallback, useEffect } from 'react';
import { ScoreForm, ScoreTable } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { getScoreAction } from 'modules/scoreBoard';
import { StoreState } from 'modules';

const MainScoreDetail = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(
    (state: StoreState) => state.scoreBoardState.scoreList
  );
  const onSubmit = (e: { game: string; score: string }) => {
    const { score } = e;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(score) && score !== '') {
      console.log(score);
    }
  };

  const getScore = useCallback(
    (id: string) => {
      dispatch(getScoreAction.request({ id: id }));
    },
    [dispatch]
  );

  useEffect(() => {
    const url = location.href.split('/');
    const id = url[url.length - 1];
    getScore(id);
  }, [getScore]);

  return (
    <>
      <ScoreForm onSubmit={onSubmit} />
      <ScoreTable data={data} />
    </>
  );
};

export default MainScoreDetail;
