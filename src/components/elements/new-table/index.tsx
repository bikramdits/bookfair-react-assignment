import React, { useState, useEffect } from "react";
import { Table } from "antd";
import styled from "styled-components";
import { Input } from "components/elements";
import ITableProps from "models/interfaces/itable-props";

const TableContainer = styled.div<any>`
  width: ${(props) => props.width || "100%"} table {
    width: 100%;
  }
`;

const NewTable: React.FC | any = ({
  columns,
  dataSource,
  scroll,
  bordered,
  loading,
  title,
  showHeader = true,
  footer,
  size = "middle",
  showSorterTooltip = false,
  pagination,
  width,
  sortOrder = ["ascend", "descend", "ascend"],
}: ITableProps) => {
  const [searchVal, setSearchVal] = useState("");
  const [dataSourceState, setDataSourceState] = useState<Array<Object>[]>();

  useEffect(() => {
    if (searchVal.trim() !== "") {
      // searching logic here
      const res = dataSource && dataSource.filter((d: any) =>
        d.title.startsWith(searchVal.trim())
      );
      setDataSourceState(res);
    } else {
      setDataSourceState(dataSource);
    }
  }, [searchVal]);

  useEffect(() => {
    let dataSourceWithKeyAttr = dataSource && dataSource.map((item: any, index: number) => {
      return { ...item, key: (index + 1).toString() };
    });
    setDataSourceState(dataSourceWithKeyAttr);
  }, [dataSource]);

  return (
    <TableContainer width={width}>
      <Input
        label="Search"
        value={searchVal}
        onChange={(e: any) => setSearchVal(e?.target.value)}
      />
      <Table
        columns={columns || []}
        dataSource={dataSourceState || []}
        scroll={scroll}
        bordered={bordered}
        loading={loading}
        title={title}
        showHeader={showHeader}
        footer={footer}
        showSorterTooltip={showSorterTooltip}
        size={size}
        pagination={pagination}
        sortDirections={sortOrder}
      />
    </TableContainer>
  );
};

export default NewTable;
