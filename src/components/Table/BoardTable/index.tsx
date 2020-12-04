import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { List, Card, Button, Row } from 'antd';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import {
  boardStateAction,
  getAttendUserListAction,
  ResponseBoardList
} from 'modules/scoreBoard';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from 'modules';
import { useHistory } from 'react-router';

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
  handleOpenModal: (
    action: Dispatch<SetStateAction<boolean>>,
    e?: React.MouseEvent<HTMLElement>,
    id?: string,
    fc?: (id: string) => void
  ) => void;
  setBoardData: (title: string, text: string, id: string) => void | undefined;
  setVisible: Dispatch<SetStateAction<boolean>>;
  setBoardVisible: Dispatch<SetStateAction<boolean>>;
  postAttendUser: (e: React.MouseEvent<HTMLElement>, id: string) => void;
  deleteAttendUser: (e: React.MouseEvent<HTMLElement>, id: string) => void;
  last: boolean;
}

export const BoardTable = (props: BoardDataProps) => {
  const {
    boardData,
    last,
    getScoreBoard,
    handleOpenModal,
    postAttendUser,
    deleteAttendUser,
    setVisible,
    setBoardVisible,
    setBoardData
  } = props;

  const admin = useSelector((state: StoreState) => state.authState.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const getAttendUser = useCallback(
    (boardId: string) => {
      dispatch(getAttendUserListAction.request({ boardId: boardId }));
    },
    [dispatch]
  );
  return (
    <BoardStyled>
      {admin?.usertype === 'admin' && (
        <Row style={{ marginTop: '1em' }}>
          <Button
            type='primary'
            style={{ margin: 'auto' }}
            onClick={() => {
              dispatch(boardStateAction.request({ state: 'create' }));
              handleOpenModal(setBoardVisible);
            }}
          >
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
                onClick={() => history.push(`/mainscore/detail/${item._id}`)}
              >
                <Row>
                  <div dangerouslySetInnerHTML={{ __html: item.text }} />
                </Row>
                <Row>
                  <Button
                    type='primary'
                    style={{ margin: 'auto', width: '30vw' }}
                    onClick={e => postAttendUser(e, item._id)}
                  >
                    참가 신청
                  </Button>
                  <Button
                    type='primary'
                    style={{ margin: 'auto', width: '30vw' }}
                    onClick={e => deleteAttendUser(e, item._id)}
                  >
                    신청 취소
                  </Button>
                </Row>
                {admin?.usertype === 'admin' && (
                  <Row>
                    <Button
                      type='primary'
                      style={{
                        margin: 'auto',
                        marginTop: '1em',
                        width: '30vw'
                      }}
                    >
                      집계
                    </Button>
                    <Button
                      type='primary'
                      style={{
                        margin: 'auto',
                        marginTop: '1em',
                        width: '30vw'
                      }}
                      onClick={e => {
                        e.stopPropagation();
                        const b = boardData.filter(a => {
                          return a._id === item._id;
                        });
                        dispatch(
                          boardStateAction.request({
                            state: 'update'
                          })
                        );
                        setBoardData(b[0].title, b[0].text, b[0]._id);
                        handleOpenModal(setBoardVisible, e, item._id);
                      }}
                    >
                      수정
                    </Button>
                  </Row>
                )}
                <Row>
                  <Button
                    type='primary'
                    style={{ margin: 'auto', marginTop: '1em', width: '30vw' }}
                    onClick={e =>
                      handleOpenModal(setVisible, e, item._id, getAttendUser)
                    }
                  >
                    참여 리스트
                  </Button>
                </Row>
              </Card>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </BoardStyled>
  );
};
