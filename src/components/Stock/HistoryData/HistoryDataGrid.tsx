import React from 'react';
import { Table } from 'antd';
import HistoryDataheader from './HistoryDataHeader';

const HistoryDataGrid: React.FC<any> = (props: any) => {
  let { columns, dataSource, loading } = props;

  return (
    <>
      <HistoryDataheader />
      <Table
        columns={columns}
        dataSource={dataSource}
        size="small"
        loading={loading}
      />
    </>
  );
};

export default HistoryDataGrid;
