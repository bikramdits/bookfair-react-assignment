import { PickerProps } from "antd/es/date-picker/generatePicker";
import { Dayjs } from "dayjs";

export default interface IDatePickerProps {
  label?: string;
  name?: string;
  onChange?: any;
  type?: string;
  margin?: string;
  picker?: string;
  padding?: string;
  size?: string;
  width?: string;
  className?: string;
  value?: Dayjs | any;
  disabled?: boolean;
  required?: boolean;
  requiredMessage?: string;
  defaultValue?: string;
  initialvalue?: string;
  format?: string;
  restProps?: any;
  fieldKey?: number | string;
}
