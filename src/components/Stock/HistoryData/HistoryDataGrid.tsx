import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import dayjs from 'dayjs';
import moment from 'moment';
import { TimeFrameEnum } from '../../../enums';
import HistoryDataheader from './HistoryDataHeader';

const HistoryDataGrid: React.FC<any> = (props: any) => {
  const { columns, dataSource, loading } = props;

  const [filteredDataSource, setFilteredDataSource] = useState(dataSource);

  const handleDateRangeChange = (dates: any) => {
    if (!dates) {
      setFilteredDataSource(dataSource);
      return;
    }
    const [start, end] = dates;
    const filteredData = dataSource.filter(
      (item: any) =>
        (dayjs(item.date).isSame(start, 'day') ||
          dayjs(item.date).isAfter(start, 'day')) &&
        (dayjs(item.date).isSame(end, 'day') ||
          dayjs(item.date).isBefore(end, 'day'))
    );
    setFilteredDataSource(filteredData);
  };

  const handleTimeFrame = (value: string) => {
    if (!value) {
      return;
    }

    switch (value) {
      case TimeFrameEnum.DAILY:
        setFilteredDataSource(dataSource);
        break;
      case TimeFrameEnum.WEEKLY:
        const weeklyLatestDataSource = dataSource.filter(
          (item: any, index: number) => !(index % 7)
        );
        setFilteredDataSource(weeklyLatestDataSource);
        break;
      case TimeFrameEnum.MONTHLY:
        const monthlyLatestDataSource = dataSource.filter(
          (item: any) => moment(dayjs(item.date).toISOString()).date() === 1
        );
        setFilteredDataSource(monthlyLatestDataSource);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setFilteredDataSource(dataSource);
  }, [dataSource]);

  return (
    <>
      <HistoryDataheader
        dateRangePickerChange={handleDateRangeChange}
        timeFrameChange={handleTimeFrame}
      />
      <Table
        columns={columns}
        dataSource={filteredDataSource}
        size="small"
        loading={loading}
        scroll={{ x: 600 }}
      />
    </>
  );
};

export default HistoryDataGrid;
