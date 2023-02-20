import { useEffect } from 'react';
import { Modal } from 'antd';
import IModalProps from 'models/interfaces/imodal-props';


const BaseModal = ({
  title,
  content,
  showModal,
  setShowModal,
  onOk = () => console.log('Ok Pressed!'),
  footer = true
}: IModalProps) => {

  useEffect(() => {
    setShowModal(showModal);
  }, [showModal])

  const handleOk = () => {
    onOk()
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return showModal ? (
    <>
      <Modal title={title} open={showModal} onOk={handleOk} onCancel={handleCancel} footer={footer}>
        {content}
      </Modal>
    </>
  ) : <></>;
};

export default BaseModal;