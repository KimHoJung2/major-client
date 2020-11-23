//base
import React, { useEffect } from 'react';
//components
import MainLayout from 'layouts/MainLayout';
import { BoardTable } from 'components/Table';
import { scoreBoardAPI } from 'modules/scoreBoard/apis/scoreBoard.api';
const MainScoreBoard = () => {
  useEffect(() => {
    scoreBoardAPI.getScoreBoardList(10);
  }, []);

  return (
    <MainLayout>
      <BoardTable />
    </MainLayout>
  );
};

export default MainScoreBoard;
