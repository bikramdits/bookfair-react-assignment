import { DefaultOptionType } from "antd/es/select";

export default interface ISelectProps {
  label?: string;
  name?: string;
  onChange?: ((value: string, option: DefaultOptionType | DefaultOptionType[]) => void);
  margin?: string;
  padding?: string;
  option?: Array<string>;
  className?: string;
  placeholder?: string;
  required?: boolean;
  requiredMessage?: string;
  mode?: "multiple" | "tags";
  value?: string;
  onDeselect?: any;
  onSelect?: any;
  defaultValue?: string;
  initialvalue?: string;
  restProps?: any;
  fieldKey?: number | string;
}
