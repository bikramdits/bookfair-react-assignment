export default interface IInputProps {
  label?: string;
  name?: string;
  requiredMessage?: string;
  required?: Boolean;
  type?: string;
  margin?: string;
  padding?: string;
  width?: string;
  className?: string;
  pattern?: string;
  regExpMessage?: string;
  placeholder?: string;
  formMargin?: string;
  initialvalue?: string;
  value?: string;
  onChange?: Function;
  restProps?: any;
  onFocus?: Function;
  fieldKey?: number | string;
  disabled?: boolean;
  error?: string;
}
