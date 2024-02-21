import React from 'react';
import { Button, DatePicker, Select } from 'antd';
import { media } from '../../../styles/themes/constants';
import { BaseRow } from '../../../components/common/BaseRow/BaseRow';
import { timeFrameData } from '../../../data-providers/time-frame.data';
import { BaseCol } from 'components/common/BaseCol/BaseCol';
import { DownloadOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  padding-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  text-align: right;
  @media only screen and ${media.xs} {
    > button {
      width: 100%;
    }
  }
  @media only screen and ${media.xs} {
    > button {
      width: 100%;
    }
  }
  @media only screen and ${media.md} {
    > button {
      width: 100%;
    }
  }
  @media only screen and ${media.lg} {
    > button {
      width: 100%;
    }
  }
`;

const CommonWrapper = styled.div`
  @media only screen and ${media.xs} {
    > div,
    .ant-picker-range {
      width: 100%;
    }
  }
  @media only screen and ${media.xs} {
    > div,
    .ant-picker-range {
      width: 100%;
    }
  }
  @media only screen and ${media.md} {
    > div,
    .ant-picker-range {
      width: 100%;
    }
  }
  @media only screen and ${media.lg} {
    > div,
    .ant-picker-range {
      width: 100%;
    }
  }
`;

const { RangePicker } = DatePicker;

const HistoryDataheader: React.FC<any> = ({
  dateRangePickerChange,
  timeFrameChange,
}) => {
  const handleDateRangeChange = (dates: any) => {
    dateRangePickerChange(dates);
  };

  const handleChange = (value: string) => {
    if (!value) {
      return;
    }

    timeFrameChange(value);
  };

  return (
    <>
      <HeaderWrapper>
        <BaseRow gutter={[10, 10]}>
          <BaseCol xs={24} sm={24} md={24} lg={24} xl={8}>
            <CommonWrapper>
              <Select
                size="small"
                defaultValue="Daily"
                style={{ width: 120 }}
                onChange={handleChange}
                options={timeFrameData}
              />
            </CommonWrapper>
          </BaseCol>
          <BaseCol xs={24} sm={24} md={24} lg={24} xl={16}>
            <BaseRow gutter={[10, 10]} justify="end">
              <BaseCol xs={24} sm={24} md={8} lg={8} xl={8}>
                <ButtonWrapper>
                  <Button
                    type="dashed"
                    size="small"
                    icon={<DownloadOutlined />}
                  >
                    Download
                  </Button>
                </ButtonWrapper>
              </BaseCol>
              <BaseCol xs={24} sm={24} md={16} lg={16} xl={16}>
                <CommonWrapper>
                  <RangePicker onChange={handleDateRangeChange} size="small" />
                </CommonWrapper>
              </BaseCol>
            </BaseRow>
          </BaseCol>
        </BaseRow>
      </HeaderWrapper>
    </>
  );
};

export default HistoryDataheader;
