import { ColumnsType } from 'antd/lib/table';
import { Dates } from '../../helpers';
import { ITesla } from '../../api/tesla.api';
import { Tag } from 'antd';

export const teslaColumn: ColumnsType<ITesla> = [
  {
    title: 'Date',
    dataIndex: 'date',
    defaultSortOrder: 'descend',
    sorter: (a: any, b: any) => a.date - b.date,
    render: (_, item: ITesla) => {
      return <>{Dates.format(item.date, 'MM-DD-YYYY')}</>;
    },
  },
  {
    title: 'Price',
    dataIndex: 'price',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.price - b.price,
    align: 'right',
    render: (_, item: ITesla) => {
      const color = item.isHigher ? 'green' : 'red';
      return (
        <>
          <Tag color={color}>{item.price}</Tag>
        </>
      );
    },
  },
  {
    title: 'Open',
    dataIndex: 'open',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.open - b.open,
    align: 'right',
  },
  {
    title: 'High',
    dataIndex: 'high',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.high - b.high,
    align: 'right',
  },
  {
    title: 'Low',
    dataIndex: 'low',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.low - b.low,
    align: 'right',
  },
  {
    title: 'Vol',
    dataIndex: 'volumne',
    defaultSortOrder: 'descend',
    sorter: (a: any, b: any) => a.volumne - b.volumne,
    align: 'right',
  },
  {
    title: 'Changes',
    dataIndex: 'changes',
    defaultSortOrder: 'descend',
    sorter: (a: any, b: any) => a.changes - b.changes,
    align: 'right',
    render: (_, item: ITesla) => {
      const color = item.isHigher ? 'green' : 'red';
      return (
        <>
          <Tag color={color}>{item.changes}</Tag>
        </>
      );
    },
  },
];
