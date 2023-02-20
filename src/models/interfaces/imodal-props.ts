export default interface IModalProps {
  title: string;
  content: JSX.Element;
  showModal: boolean;
  setShowModal: Function;
  onOk?: Function;
  footer?: boolean;
}
