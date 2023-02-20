import { DatePicker, Form } from "antd";
import styled from "styled-components";
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import locale from 'antd/locale/zh_CN';
import ConfigProvider from "antd/lib/config-provider";
import IDatePickerProps from "models/interfaces/idatepicker-props";


const DatePickerContainer = styled.div<any>`
  margin: ${(props) => props.margin || "auto"};
  padding: ${(props) => props.padding || "auto"};
  .ant-picker {
    width: 100%;
  }

  .ant-form-item,
  .ant-select-in-form-item {
    margin: 0 0 8px 10px !important;

    .ant-form-item-label {
      padding: 0 !important;
    }

    .ant-form-item-control-input {
      input {
        border-radius: 4px;
        width: 100%;

        &:hover,
        &:focus {
          border-color: blue;
        }

        &:focus {
          box-shadow: none;
        }
      }
    }
  }
`;

const DatePickerB = ({
    label,
    name,
    onChange,
    type,
    margin,
    picker,
    padding,
    size,
    width,
    className,
    value,
    disabled,
    required = false,
    requiredMessage,
    defaultValue,
    initialvalue,
    format = "MM/DD/YYYY",
    restProps,
    fieldKey,
}: IDatePickerProps) => {

    return (
        <>
            <DatePickerContainer
                margin={margin}
                padding={padding}
                className={className}
                initialvalue={initialvalue}
                defaultValue={defaultValue}
            >
                <Form.Item
                    disabled={disabled}
                    format={format}
                    label={<>{label}</>}
                    {...restProps}
                    name={name}
                    fieldKey={fieldKey}
                    initialvalue={initialvalue}
                    rules={[
                        {
                            required: required,
                            message: required && requiredMessage,
                        },
                    ]}
                >
                    <ConfigProvider locale={locale}>

                    <DatePicker
                        picker="week"
                        name={name}
                        value={value}
                        onChange={onChange}
                        format={format}
                        defaultValue={dayjs(dayjs(), format)}
                    />
                    </ConfigProvider>
                </Form.Item>
            </DatePickerContainer>
        </>
    );
};

export default DatePickerB;
