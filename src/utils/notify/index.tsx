import { message } from "antd";

const Notify = (text: string, type: string = "info") => {
  switch (type) {
    case "success":
      return message.success(text);
    case "error":
      return message.error(text);
    case "warning":
      return message.warning(text);
    default:
      return message.info(text);
  }
};

export default Notify;
