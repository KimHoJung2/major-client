import React from 'react';
import { Modal } from 'antd';

interface AttendListModalProps {
  visible: boolean;
  handleCloseModal: () => void;
}

const AttendListModal = (props: AttendListModalProps) => {
  const { visible, handleCloseModal } = props;

  return <Modal visible={visible} onCancel={handleCloseModal} />;
};

export default AttendListModal;
