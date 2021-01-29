import AttendListModal from 'components/Modal/AttendListModal';
import CreateBoardModal from 'components/Modal/CreateBoardModal';
import { BoardTable } from 'components/Table';
import { StoreState } from 'modules';
import {
  deleteAttendUserAction,
  getScoreBoardAction,
  postAttendUserAction
} from 'modules/scoreBoard';
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MainScoreBoard = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [boardVisible, setBoardVisible] = useState(false);
  const [boardTitle, setBoardTitle] = useState('');
  const [textData, setTextData] = useState('');
  const [openId, setOpenId] = useState('');
  const attendUserList = useSelector(
    (state: StoreState) => state.scoreBoardState.attendList.data
  );

  const user = useSelector((state: StoreState) => state.authState.user);
  const boardState = useSelector(
    (state: StoreState) => state.scoreBoardState.boardState
  );
  const { data, last } = useSelector(
    (state: StoreState) => state.scoreBoardState.boardList
  );

  const getScoreBoard = useCallback(
    (skip: number) => {
      dispatch(getScoreBoardAction.request({ skip: skip }));
    },
    [dispatch]
  );

  const handleCloseModal = (action: Dispatch<SetStateAction<boolean>>) => {
    action(false);
  };

  const handleOpenModal = (
    action: Dispatch<SetStateAction<boolean>>,
    e?: React.MouseEvent<HTMLElement>,
    id?: string,
    fc?: (id: string) => void
  ) => {
    if (e) {
      e.stopPropagation();
    }
    if (fc && id) {
      fc(id);
    }
    action(true);
  };

  const postAttendUser = (e: React.MouseEvent<HTMLElement>, id: string) => {
    const a = 'asf';
    e.stopPropagation();
    dispatch(
      postAttendUserAction.request({ boardId: id, username: user?.username })
    );
  };

  const deleteAttendUser = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.stopPropagation();
    dispatch(
      deleteAttendUserAction.request({ boardId: id, username: user?.username })
    );
  };

  const setBoardData = (title: string, text: string, id: string) => {
    setBoardTitle(title);
    setTextData(text);
    setOpenId(id);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getScoreBoard(0);
  }, [dispatch]);

  return (
    <>
      <BoardTable
        boardData={data}
        last={last}
        getScoreBoard={getScoreBoard}
        handleOpenModal={handleOpenModal}
        postAttendUser={postAttendUser}
        deleteAttendUser={deleteAttendUser}
        setVisible={setVisible}
        setBoardData={setBoardData}
        setBoardVisible={setBoardVisible}
      />
      <AttendListModal
        visible={visible}
        setVisible={setVisible}
        handleCloseModal={handleCloseModal}
        data={attendUserList}
      />
      <CreateBoardModal
        name={user?.username}
        visible={boardVisible}
        boardData={data}
        openId={openId}
        boardState={boardState}
        setBoardVisible={setBoardVisible}
        handleCloseModal={handleCloseModal}
        boardTitle={boardTitle}
        setBoardTitle={setBoardTitle}
        textData={textData}
        setTextData={setTextData}
      />
    </>
  );
};

export default MainScoreBoard;
