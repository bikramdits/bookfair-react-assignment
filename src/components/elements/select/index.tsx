import { Select as AntSelect, Form } from "antd";
import styled from "styled-components";
import ISelectProps from "models/interfaces/iselect-props";

const SelectContainer = styled.div<any>`
  margin: ${(props) => props.margin || "auto"};
  padding: ${(props) => props.padding || "auto"};
  width: 100%;

  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    &:hover,
    &:focus {
      border-color: primary;
      box-shadow: none;
    }
  }

  .ant-form-item-label {
    label {
      &:after {
        content: none;
      }
    }
  }

  .ant-form-item,
  .ant-select-in-form-item {
    // margin: 0 4px 8px 5px !important;
    border-radius: 10px !important;

    .ant-form-item-label {
      padding: 0 !important;
      // font-weight: bold;
    }

    .ant-form-item-control-input {
      input {
        border-radius: 4px;
        width: 100%;

        &:hover,
        &:focus {
          border-color: primary;
        }

        &:focus {
          box-shadow: none;
        }
      }
    }
  }
`;

const { Option } = AntSelect;

const Select = ({
  label,
  name,
  onChange,
  margin,
  padding,
  option,
  className,
  placeholder,
  required = false,
  requiredMessage,
  mode,
  value,
  onDeselect,
  onSelect,
  defaultValue,
  initialvalue,
  restProps,
  fieldKey,
}: ISelectProps) => {
  return (
    <>
      <SelectContainer margin={margin} padding={padding} className={className}>
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
          <AntSelect
            showSearch
            onChange={onChange}
            defaultValue={defaultValue}
            onDeselect={onDeselect}
            onSelect={onSelect}
            placeholder={placeholder}
            mode={mode}
            value={value}
          >
            {option?.map((item: string) => {
              return (
                <Option key={item} value={item}>
                  {item}
                </Option>
              );
            })}
          </AntSelect>
        </Form.Item>
      </SelectContainer>
    </>
  );
};

export default Select;
