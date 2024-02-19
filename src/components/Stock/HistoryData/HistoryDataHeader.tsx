import React from 'react';
import { Button, DatePicker, Select, Space } from 'antd';
import { BaseRow } from '../../../components/common/BaseRow/BaseRow';
import { BaseCol } from 'components/common/BaseCol/BaseCol';
import { DownloadOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const HeaderWrapper = styled.div `
  padding-bottom: 20px;
`;

const SpaceWrapper = styled.div `
  text-align: right;
`;

const { RangePicker } = DatePicker;

const HistoryDataheader: React.FC<any> = () => {
  
  return(
    <>
      <HeaderWrapper>
        <BaseRow gutter={[30, 30]}>
          <BaseCol span={8}>
            <Select
              size='small'
              defaultValue="Daily"
              style={{ width: 120 }}
              options={[
                { value: 'daily', label: 'Daily' },
                { value: 'weekly', label: 'Weekly' },
                { value: 'monthly', label: 'Monthly' },
              ]}
            /> 
          </BaseCol>
          <BaseCol span={16}>
            <SpaceWrapper>
              <Space direction='horizontal' align='end' size={12}>
                <Button type="text" size='small' icon={<DownloadOutlined />}>
                  Download
                </Button>
                <RangePicker size='small' />
              </Space>
            </SpaceWrapper>
          </BaseCol>
        </BaseRow>
      </HeaderWrapper>
    </>
  )
};

export default HistoryDataheader;