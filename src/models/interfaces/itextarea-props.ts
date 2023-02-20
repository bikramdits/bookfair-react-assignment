export default interface ITextAreaBProps {
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  type?: string;
  margin?: string;
  padding?: string;
  required?: boolean;
  requiredMessage?: string;
  width?: number | string;
  value: string;
  className?: string;
  disabled?: boolean;
  initialvalue?: string;
  restProps?: any;
  fieldKey?: string;
  placeholder?: string;
  maxLength?: number;
  showCount?: boolean;
}
