import React, { Dispatch, SetStateAction } from 'react';
import { Modal, Row } from 'antd';
import { ResponseAttendUserList } from 'modules/scoreBoard';
import styled from 'styled-components';

interface AttendListModalProps {
  visible: boolean;
  handleCloseModal: (action: Dispatch<SetStateAction<boolean>>) => void;
  setVisible: Dispatch<SetStateAction<boolean>>;
  data: ResponseAttendUserList[];
}

const RowStyled = styled(Row)`
  font-size: 1.5em;
  background: #00bdb7;
  color: #f0f0f0f0;
  border-bottom: 1px solid #fefefefe;
  span {
    margin: auto;
  }
`;

const AttendListModal = (props: AttendListModalProps) => {
  const { visible, setVisible, handleCloseModal, data } = props;
  return (
    <Modal
      visible={visible}
      onOk={() => handleCloseModal(setVisible)}
      onCancel={() => handleCloseModal(setVisible)}
      cancelButtonProps={{ style: { display: 'none' } }}
      bodyStyle={{ padding: '42px' }}
    >
      {data.map((arr, idx) => {
        return (
          <RowStyled key={idx}>
            <span>{arr.username}</span>
          </RowStyled>
        );
      })}
      <Row style={{ marginTop: '10px' }}>
        <span style={{ margin: 'auto' }}>{data.length} 명</span>
      </Row>
    </Modal>
  );
};

export default AttendListModal;
