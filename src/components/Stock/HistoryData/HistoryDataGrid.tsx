import React from 'react';
import { Table } from 'antd';

const HistoryDataGrid: React.FC<any> = (props: any) => {
  let {columns, dataSource} = props;

  return(
    <Table columns={columns} dataSource={dataSource} />
  )
};

export default HistoryDataGrid;