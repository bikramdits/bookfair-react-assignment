import styled from "styled-components";
import React from "react";
import { Input, Form } from "antd";
import ITextAreaBProps from "models/interfaces/itextarea-props";

const { TextArea } = Input;
const TextAreaContainer = styled.div<{ margin?: string; padding?: string }>`
  margin: ${(props) => props.margin || "auto"};
  padding: ${(props) => props.padding || "auto"};
  width: 100%;
  textarea {
    border-radius: 4px;
  }
`;
const uFirst = (s: string) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const TextAreaB: React.FC<ITextAreaBProps> = ({
  label,
  name,
  onChange,
  type,
  margin,
  padding,
  required = false,
  requiredMessage,
  width,
  value,
  className,
  disabled,
  initialvalue,
  restProps,
  fieldKey,
  placeholder,
  maxLength,
  showCount = false,
}) => {
  return (
    <>
      <TextAreaContainer
        margin={margin}
        padding={padding}
        className={className}
      >
        <Form.Item
          {...restProps}
          label={<>{label}</>}
          name={name}
          rules={[
            {
              required: required,
              message:
                required &&
                (requiredMessage || `${uFirst(name)} is required !`),
            },
          ]}
          initialvalue={initialvalue}
          fieldKey={fieldKey}
        >
          <TextArea
            value={value}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
            showCount={showCount}
            maxLength={maxLength}
          />
        </Form.Item>
      </TextAreaContainer>
    </>
  );
};

export default TextAreaB;
