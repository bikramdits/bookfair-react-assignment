import { SizeType } from "antd/lib/config-provider/SizeContext";
import { SortOrder } from "antd/lib/table/interface";
import { PanelRender } from "rc-table/lib/interface";

export default interface ITableProps {
    columns?: Object[];
    dataSource?: Array<Object>[];
    scroll?: Object;
    bordered?: boolean;
    loading?: boolean;
    title?: PanelRender<Object[]>;
    showHeader?: boolean;
    footer?: PanelRender<Object[]>;
    pagination?: Object;
    size?: SizeType;
    showSorterTooltip: boolean;
    width?: string;
    sortOrder?: SortOrder[];
  }