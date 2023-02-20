import styled from "styled-components";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.us";
import { Form } from "antd";
import IPhoneNumberInputProps from "models/interfaces/iphonenumber-props";

const InputContainer = styled.div<any>`
  margin: ${(props) => props.margin || "auto"};
  padding: ${(props) => props.padding || "auto"};

  .ant-form-item {
    margin: 0 0 8px 10px !important;

    &.ant-form-item-has-error {
      input {
        border-color: red !important;
      }
    }
    .ant-form-item-label {
      padding: 0 !important;
    }

    .ant-form-item-control-input {
      input {
        border-radius: 4px;
        width: 100%;
        border: 1px solid gray;
        padding: ${(props) => props.padding || "0px 9px"};
        @media (max-width: 767px) {
          font-size: 16px;
          padding: 2.5px 11px;
        }
        &:hover,
        &:focus {
          border-color: primary;
        }

        &:focus {
          box-shadow: none;
        }
        &:focus-visible {
          border-color: primary;
          outline: none;
        }
      }
    }
  }
  .ant-form-item-label > label::after {
    content: "";
    position: absolute;
    top: 0;
    margin: 0;
  }
`;

const PhoneInputStyle = styled(Cleave)<any>`
  position: relative;
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  height: 32px;
  font-size: 14px;
  border-radius: 4px;
  width: ${(props) => props.padding || "100%"};

  &:focus,
  &:focus-visible {
    border: 1px solid primary;
    box-shadow: none !important;
  }
  @media screen and (max-width: 991px) {
    width: ${(props) => props.width || "100%"};
  }

  @media screen and (max-width: 450px) {
    width: ${(props) => props.width || "100%"};
  }

  &:hover,
  &:focus {
    border-color: primary;
  }

  &:focus {
    box-shadow: none;
  }
`;

const FooterStyle = styled.div`
  font-size: 1.2rem;
  margin-top: 10px;
  color: gray;
`;

export function PhoneNumberInput({
  label = "",
  height,
  width,
  footer,
  xswidth,
  type,
  placeholder,
  value,
  onChange,
  readOnly,
  required,
  name,
  pattern,
  className,
  margin,
  padding,
  regExpMessage,
  requiredMessage,
  restProps,
  fieldKey,
  onFocus,
  initialvalue,
}: IPhoneNumberInputProps) {
  return (
    <InputContainer
      margin={margin}
      padding={padding}
      className={className}
      placeholder={placeholder}
      type={type}
    >
      <Form.Item
        {...restProps}
        label={<>{label}:&nbsp;</>}
        name={name}
        initialvalue={initialvalue}
        rules={[
          {
            required: required,
            message: required && requiredMessage,
          },
        ]}
        fieldKey={fieldKey}
      >
        <PhoneInputStyle
          height={height || "20px"}
          width="100%"
          name={name}
          type={type || "text"}
          initialvalue={initialvalue}
          onFocus={onFocus || null}
          placeholder={placeholder || ""}
          xswidth={xswidth || null}
          value={value || ""}
          onChange={onChange || null}
          options={{ phone: true, phoneRegionCode: "US" }}
          readOnly={readOnly || null}
          maxLength={14} // need to fix that weird edge case with multiple 1's at beginning of phone number
          id="phoneInput"
        />
      </Form.Item>
    </InputContainer>
  );
}

export default PhoneNumberInput;
