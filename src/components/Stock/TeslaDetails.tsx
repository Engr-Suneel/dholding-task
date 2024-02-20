import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseRow } from '../../components/common/BaseRow/BaseRow';
import { BaseCol } from '../../components/common/BaseCol/BaseCol';
import { BaseCard } from '../../components/common/BaseCard/BaseCard';
import PieChartDetails from '../../components/Charts/PieChartDetails';
import { teslaColumn } from '../../data-providers/tesla/tesla-column.data';
import { teslaDataSource } from '../../data-providers/tesla/tesla.data';
import { NewsTypeEnum } from '../../enums';
import HistoryDataGrid from './HistoryData/HistoryDataGrid';
import { pieChartData } from './MarketData/PieChartData';
import NewsDetails from './NewsData/NewsDetails';

import styled from 'styled-components';

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

const TeslaDetailsPage: React.FC = () => {
  const { t } = useTranslation();
  const columns: any = teslaColumn;
  const dataSource: any = teslaDataSource;

  return (
    <>
      <BaseRow gutter={[30, 30]}>
        <BaseCol span={16}>
          <BaseCard
            id="Tesla History"
            title={t('stock.tesla.title')}
            padding="1.25rem"
          >
            <HistoryDataGrid columns={columns} dataSource={dataSource} />
          </BaseCard>
        </BaseCol>
        <BaseCol span={8}>
          <BaseCard id="Tesla Market" padding="1.25rem">
            <ChartWrapper>
              <Heading>Market</Heading>
              <PieChartDetails data={pieChartData} />
            </ChartWrapper>
            <NewsWrapper>
              <NewsDetails
                newsType={NewsTypeEnum.TESLA}
                title={t('stock.tesla.newsTitle')}
              />
            </NewsWrapper>
          </BaseCard>
        </BaseCol>
      </BaseRow>
    </>
  );
};

export default TeslaDetailsPage;
