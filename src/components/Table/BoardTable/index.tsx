import React from 'react';
import { List, Card } from 'antd';
import styled from 'styled-components';

const BoardStyled = styled.div`
  .ant-list {
    .ant-spin-container {
      .ant-list-items {
        .ant-list-item {
          border-bottom: 0;
        }
      }
    }
  }
`;

export const BoardTable = () => {
  const data = [
    {
      title: 'Title 1'
    },
    {
      title: 'Title 2'
    },
    {
      title: 'Title 3'
    },
    {
      title: 'Title 4'
    }
  ];

  return (
    <BoardStyled>
      <List
        dataSource={data}
        size='large'
        renderItem={item => (
          <List.Item>
            <Card style={{ width: '100%' }} title={item.title} />
          </List.Item>
        )}
      />
      ,
    </BoardStyled>
  );
};
