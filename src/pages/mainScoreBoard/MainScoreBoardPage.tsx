//base
import React from 'react';
//components
import MainLayout from 'layouts/MainLayout';
import MainScoreBoard from 'containers/MainScoreBoard';
const MainScoreBoardPage = () => {
  return (
    <MainLayout>
      <MainScoreBoard />
    </MainLayout>
  );
};

export default MainScoreBoardPage;
