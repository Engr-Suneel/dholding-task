import React from 'react';
import { Table } from 'antd';
import HistoryDataheader from './HistoryDataHeader';

const HistoryDataGrid: React.FC<any> = (props: any) => {
  let {columns, dataSource} = props;

  return(
    <>
      <HistoryDataheader />
      <Table columns={columns} dataSource={dataSource} />
    </>
  )
};

export default HistoryDataGrid;