import React from 'react';
import {
  DashboardOutlined,
  LineChartOutlined,
} from '@ant-design/icons';

export interface SidebarNavigationItem {
  title: string;
  key: string;
  url?: string;
  children?: SidebarNavigationItem[];
  icon?: React.ReactNode;
}

export const sidebarNavigation: SidebarNavigationItem[] = [
  {
    title: 'common.dashboard',
    key: 'dashboard',
    url: '/',
    icon: <DashboardOutlined />,
  },
  {
    title: 'common.stock',
    key: 'stock',
    icon: <LineChartOutlined />,
    children: [
      {
        title: 'common.apple',
        key: 'apple',
        url: '/stock/apple',
      },
      {
        title: 'common.tesla',
        key: 'tesla',
        url: '/stock/tesla',
      },
      {
        title: 'common.nvidia',
        key: 'nvidia',
        url: '/stock/nvidia',
      }
    ],
  },
];
