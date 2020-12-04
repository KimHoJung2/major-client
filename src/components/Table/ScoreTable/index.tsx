import React from 'react';
import { Button, Col, Row, Table } from 'antd';
import styled from 'styled-components';

import './index.less';
import { ResponseScoreList } from 'modules/scoreBoard';
import Modal from 'antd/lib/modal/Modal';

const StyledScoreTable = styled(Table)`
  .ant-table {
    border-radius: 0;
  }
  .ant-table-small {
    font-size: 13px;
  }
`;

const StyledRow = styled(Row)`
  padding: 1em;
  .ant-col {
    text-align: center;
    .ant-btn {
      width: 80%;
    }
  }
`;

interface ScoreTableProps {
  data: ResponseScoreList[];
}

export const ScoreTable = (props: ScoreTableProps) => {
  const { data } = props;
  const columns = [
    {
      title: 'rank',
      dataIndex: 'rank',
      key: 'rank'
    },
    {
      title: 'name',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: '1G',
      dataIndex: ['score', 'firstGame'],
      key: 'firstGame'
    },
    {
      title: '2G',
      dataIndex: ['score', 'secondGame'],
      key: 'secondGame'
    },
    {
      title: '3G',
      dataIndex: ['score', 'thirdGame'],
      key: 'thirdGame'
    },
    {
      title: '4G',
      dataIndex: ['score', 'fourGame'],
      key: 'score.fourGame'
    },
    {
      title: 'Avg',
      dataIndex: 'avg',
      key: 'avg'
    }
  ];

  return (
    <>
      <StyledScoreTable
        columns={columns}
        pagination={false}
        dataSource={data}
        size='small'
        rowKey={(recode: any) => `${recode.rank}`}
      />
      <StyledRow>
        <Col span={12}>
          <Button type='primary'>포인트 추가</Button>
        </Col>
        <Col span={12}>
          <Button type='primary'>총 핀</Button>
        </Col>
      </StyledRow>
      <Modal>총핀</Modal>
    </>
  );
};
