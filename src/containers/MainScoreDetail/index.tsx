import React, { useCallback, useEffect, useState } from 'react';
import { ScoreForm, ScoreTable } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { getScoreAction } from 'modules/scoreBoard';
import { StoreState } from 'modules';
import { message } from 'antd';

const MainScoreDetail = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: StoreState) => state.authState.user);
  const [boardId, setBoardId] = useState('');
  const { data } = useSelector(
    (state: StoreState) => state.scoreBoardState.scoreList
  );
  const onSubmit = (e: { game: string; score: string }) => {
    const { score } = e;
    console.log(boardId);
    console.log(user);
    const reg = /^-?\d*(\.\d*)?$/;
    const submitData = {
      boardId: boardId,
      username: user?.username,
      userId: user?._id
    };
    if (!reg.test(score)) {
      return message.error('숫자 입력해라.');
    }

    if (score === '' || score === undefined) {
      return message.error('입력된 값 없음.');
    }
    console.log(submitData);
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
    setBoardId(id);
    window.scrollTo(0, 0);
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
