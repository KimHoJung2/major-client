/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Dispatch, SetStateAction } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Input, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import {
  createBoardAction,
  ResponseBoardList,
  updateBoardAction
} from 'modules/scoreBoard';
import { useHistory } from 'react-router';

interface CreateBoardModalProps {
  visible: boolean;
  boardData: ResponseBoardList[];
  name: string | undefined;
  boardTitle: string;
  boardState: string;
  setBoardTitle: Dispatch<SetStateAction<string>>;
  textData: string;
  openId: string;
  setTextData: Dispatch<SetStateAction<string>>;
  setBoardVisible: Dispatch<SetStateAction<boolean>>;
  handleCloseModal: (action: Dispatch<SetStateAction<boolean>>) => void;
}

const CreateBoardModal = (props: CreateBoardModalProps) => {
  const {
    visible,
    name,
    boardData,
    boardTitle,
    boardState,
    setBoardTitle,
    openId,
    textData,
    setTextData,
    setBoardVisible,
    handleCloseModal
  } = props;

  const dispatch = useDispatch();
  const history = useHistory();
  const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoardTitle(e.target.value);
  };
  const handleText = (e: string) => {
    setTextData(e);
  };

  const onOk = () => {
    if (boardState === 'create') {
      dispatch(
        createBoardAction.request({
          key: boardData[0].key + 1,
          title: boardTitle,
          text: textData,
          name: name
        })
      );
    } else {
      dispatch(
        updateBoardAction.request({
          id: openId,
          title: boardTitle,
          text: textData
        })
      );
    }
    handleCloseModal(setBoardVisible);
    history.replace('/');
  };

  return (
    <Modal
      width='100%'
      bodyStyle={{ height: '65vh', paddingTop: '50px' }}
      visible={visible}
      onCancel={() => handleCloseModal(setBoardVisible)}
      onOk={onOk}
    >
      <Input
        addonBefore='제목'
        className='attendTitle'
        type='text'
        value={boardTitle}
        style={{ color: 'black !important' }}
        onChange={titleChange}
      />
      <ReactQuill
        theme='snow'
        style={{ marginTop: '20px', height: '30vh' }}
        onChange={handleText}
        value={textData}
      />
    </Modal>
  );
};

export default CreateBoardModal;
