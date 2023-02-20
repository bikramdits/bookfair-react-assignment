import { useEffect, useState } from "react";
import { Form, Typography } from "antd";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import "dayjs/locale/zh-cn";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import BaseModal from "components/modals/base-modal";
import DashboardModal from "components/modals/dashboard-modal";
import {
  Input,
  Select,
  TextArea,
  BasicButton,
  PhoneNumberInput,
  DatePickerB,
  NewTable,
  ImagePicker
} from "components/elements";
import postsQuery from "services/graphql/query/posts.query";
import Notify from "utils/notify";

const option = [
  "Sector 44",
  "Sector 17",
  "Sector 51",
  "3B1",
  "4 Phase",
  "Chandigarh",
  "Mohali",
  "Tri-City",
];

const DashboardContainer = styled.div`
  margin: 30px;
`;

const Dashboard = () => {
  const [inputValue, setInputValue] = useState("");
  const [date, setDate] = useState<Dayjs>(dayjs(dayjs()));
  const [showModal, setShowModal] = useState(false);
  const [dataSource, setDataSource] = useState();
  const [columns, setColumns] = useState();

  const onChange = (date: Dayjs) => {
    if (date) {
      setDate(date);
    } else {
      setDate(dayjs(dayjs()));
    }
  };

  const addPosts = () => {};

  const { loading } = useQuery(postsQuery, {
    onCompleted: (data) => setDataSource(data.posts.data),
    onError: (err) => Notify(err.message, "error"),
  });

  useEffect(() => {
    if (!columns && dataSource) {
      const objKeys = Object.keys(dataSource[0]);
      const newColumn: any = [];
      objKeys.forEach(
        (k) =>
          !k.startsWith("_") &&
          newColumn.push({
            title: k.toLowerCase(),
            dataIndex: k,
            key: k,
          })
      );
      setColumns(newColumn);
    }
  }, [columns, dataSource]);

  return (
    <>
      <Typography.Title
        level={2}
        style={{ marginTop: "2%", textAlign: "center" }}
      >
        Welcome to Dashboard!
      </Typography.Title>
      <DashboardContainer>
        <Form>
          <Input
            label="Input"
            value={inputValue}
            onChange={(e: any) => setInputValue(e.target.value as string)}
          ></Input>
          <DatePickerB
            label="Date picker"
            value={date}
            onChange={onChange}
          ></DatePickerB>
          <PhoneNumberInput label="Phone Number"></PhoneNumberInput>
          <Select label="Select" option={option}></Select>
          <TextArea
            label="Text Area"
            onChange={(e) => console.log(e)}
            value={""}
            name="test"
          ></TextArea>
        </Form>
        <BasicButton type="primary" onClick={() => setShowModal(true)}>
          Open Modal
        </BasicButton>
        <br />
        <ImagePicker />
        <br/>
        <NewTable
          columns={columns}
          dataSource={dataSource || []}
          loading={loading}
          pagination={{
            hideOnSinglePage: true,
          }}
        />
      </DashboardContainer>
      <BaseModal
        title="New Modal"
        content={<DashboardModal />}
        showModal={showModal}
        setShowModal={setShowModal}
        onOk={addPosts}
      />
    </>
  );
};

export default Dashboard;
