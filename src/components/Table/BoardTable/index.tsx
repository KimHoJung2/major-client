import React, { useState } from 'react';
import { List, Card, Button, Row, Modal } from 'antd';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import { ResponseBoardList } from 'modules/scoreBoard';
import { useSelector } from 'react-redux';
import { StoreState } from 'modules';

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

interface BoardDataProps {
  boardData: ResponseBoardList[];
  getScoreBoard: (skip: number) => void;
  last: boolean;
}

export const BoardTable = (props: BoardDataProps) => {
  const { boardData, last, getScoreBoard } = props;
  const admin = useSelector((state: StoreState) => state.authState.admin);
  const [visible, setVisible] = useState(false);
  const handleAttenUserList = (id: string) => {
    setVisible(true);
    console.log(id);
  };

  return (
    <BoardStyled>
      {admin === 'admin' && (
        <Row style={{ marginTop: '1em' }}>
          <Button type='primary' style={{ margin: 'auto' }}>
            게시글 추가
          </Button>
        </Row>
      )}
      <InfiniteScroll
        pageStart={0}
        loadMore={next => {
          getScoreBoard(next * 10);
        }}
        hasMore={last}
        useWindow={true}
      >
        <List
          dataSource={boardData}
          size='large'
          renderItem={item => (
            <List.Item>
              <Card
                style={{ width: '100%', borderRadius: '10px' }}
                title={item.title}
                headStyle={{
                  fontSize: '1em',
                  textAlign: 'center',
                  padding: 0
                }}
              >
                <Row>
                  <div dangerouslySetInnerHTML={{ __html: item.text }} />
                </Row>
                <Row>
                  <Button type='primary' style={{ margin: 'auto' }}>
                    참가 신청
                  </Button>
                  <Button type='primary' style={{ margin: 'auto' }}>
                    신청 취소
                  </Button>
                  <Button
                    type='primary'
                    style={{ margin: 'auto', top: '1em' }}
                    onClick={() => handleAttenUserList('asdf')}
                  >
                    참여 리스트
                  </Button>
                </Row>
              </Card>
            </List.Item>
          )}
        />
      </InfiniteScroll>
      <Modal visible={visible}>asdfsafsa</Modal>
    </BoardStyled>
  );
};
