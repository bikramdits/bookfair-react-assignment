import styled from 'styled-components'
import { Form, Input as AntInput } from "antd";
import IInputProps from 'models/interfaces/iinput-props'

export const InputContainer = styled.div<any>`
  margin:  ${props => props.margin || "0 auto"};
  padding: ${props => props.padding || "auto"};
  width: ${props => props.width};
  input {
    color: #000;
  }
`;

const Input = ({
  label = "",
  name,
  requiredMessage,
  required = false,
  type,
  margin,
  padding,
  width,
  className,
  pattern = "",
  regExpMessage,
  placeholder,
  formMargin,
  initialvalue,
  value,
  onChange = (e: Event) => {},
  restProps,
  onFocus = (e: Event) => {},
  fieldKey,
  disabled,
  error,
}: IInputProps) => {
  const inputTags = (type: any) => {
    let inputType: any;
    switch (type) {
      case "password": {
        inputType = (
          <AntInput.Password
            width={width}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e)}
          />
        );
        break;
      }
      case type: {
        inputType = (
          <AntInput
            defaultValue={initialvalue}
            onFocus={(e) => onFocus(e)}
            width={width}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e)}
            disabled={disabled}
          />
        );
        break;
      }
      default: {
      }
    }
    return inputType;
  };
  return (
    <InputContainer
      margin={margin}
      padding={padding}
      className={className}
      placeholder={placeholder}
      type={type}
      error={error}
      width={width}
    >
      <Form.Item
        label={<>{label !== "" && label}</>}
        {...restProps}
        fieldKey={fieldKey}
        name={name}
        margin={formMargin}
        initialvalue={initialvalue}
        rules={[
          {
            required: required,
            message: required && requiredMessage,
          },
          pattern && {
            pattern: pattern,
            message: regExpMessage,
          },
        ]}
      >
        {inputTags(type)}
      </Form.Item>
    </InputContainer>
  );
};
export default Input;
