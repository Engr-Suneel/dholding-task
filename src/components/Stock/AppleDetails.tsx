import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseRow } from '../../components/common/BaseRow/BaseRow';
import { BaseCol } from '../../components/common/BaseCol/BaseCol';
import { BaseCard } from '../../components/common/BaseCard/BaseCard';
import { appleColumn } from '../../data-providers/apple/apple-column.data';
import { appleDataSource } from '../../data-providers/apple/apple.data';
import BarChartDetails from '../../components/Charts/BarChartDetails';
import { barChartData } from './MarketData/BarChartData';
import HistoryDataGrid from './HistoryData/HistoryDataGrid';
import NewsDetails from './NewsData/NewsDetails';

import styled from 'styled-components';
import { NewsTypeEnum } from 'enums';

const ChartWrapper = styled.div`
  height: 300px;
`;

const NewsWrapper = styled.div`
  height: 300px;
  margin-top: 30px;
`;

const Heading = styled.span.attrs({ className: 'ant-card-head-title' })`
  padding: 0px;
  font-size: 18px;
  font-weight: bold;
`;

const AppleDetailsPage: React.FC = () => {
  const { t } = useTranslation();
  const columns: any = appleColumn;
  const dataSource: any = appleDataSource;

  return (
    <>
      <BaseRow gutter={[30, 30]}>
        <BaseCol span={16}>
          <BaseCard
            id="Apple History"
            title={t('stock.apple.title')}
            padding="1.25rem"
          >
            <HistoryDataGrid columns={columns} dataSource={dataSource} />
          </BaseCard>
        </BaseCol>
        <BaseCol span={8}>
          <BaseCard id="Apple Market" padding="1.25rem">
            <ChartWrapper>
              <Heading>Market</Heading>
              <BarChartDetails data={barChartData} />
            </ChartWrapper>
            <NewsWrapper>
              <NewsDetails
                newsType={NewsTypeEnum.APPLE}
                title={t('stock.apple.newsTitle')}
              />
            </NewsWrapper>
          </BaseCard>
        </BaseCol>
      </BaseRow>
    </>
  );
};

export default AppleDetailsPage;
