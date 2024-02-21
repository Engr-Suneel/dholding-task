import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseRow } from '../../components/common/BaseRow/BaseRow';
import { BaseCol } from '../../components/common/BaseCol/BaseCol';
import { BaseCard } from '../../components/common/BaseCard/BaseCard';
import PieChartDetails from '../../components/Charts/PieChartDetails';
import { teslaColumn } from '../../data-providers/tesla/tesla-column.data';
import { NewsTypeEnum } from '../../enums';
import { ITesla, getTeslaData } from '../../api/tesla.api';
import HistoryDataGrid from './HistoryData/HistoryDataGrid';
import { pieChartData } from './MarketData/PieChartData';
import NewsDetails from './NewsData/NewsDetails';

import CompanyDetails from './CompanyData/CompanyDetails';
import CompanyWatchListDetails from './CompanyData/CompanyWatchListDetails';

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

const CompanyWrapper = styled.div`
  margin-bottom: 30px;
`;

const TeslaDetailsPage: React.FC = () => {
  const { t } = useTranslation();
  const columns: any = teslaColumn;

  const [tesla, setTesla] = useState<ITesla[]>([]);
  const [isLoading, setLoading] = useState(false);

  const discription = `
    Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles, 
    and energy generation and storage systems in the United States, China, and 
    internationally. The company operates in two segments, Automotive, and Energy 
    Generation and Storage. The Automotive segment offers electric vehicles, 
    as well as sells automotive regulatory credits
  `;

  useEffect(() => {
    setLoading(true);
    getTeslaData().then((response) => {
      setTesla(response);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <CompanyWrapper>
        <BaseRow gutter={[30, 30]}>
          <BaseCol xs={24} sm={24} md={24} lg={12} xl={12}>
            <BaseCard id="Tesla Company" padding="1.25rem">
              <CompanyDetails
                title={t('stock.tesla.company')}
                flag={'US'}
                name={'NASDAQ'}
                currency={'USD'}
                price={'180.88'}
                charges={'-0.68(-0.37%)'}
                realTime={'14:48:19'}
              />
            </BaseCard>
          </BaseCol>
          <BaseCol xs={24} sm={24} md={24} lg={12} xl={12}>
            <BaseCard id="Tesla Watch List" padding="1.25rem">
              <CompanyWatchListDetails discription={discription} />
            </BaseCard>
          </BaseCol>
        </BaseRow>
      </CompanyWrapper>
      <BaseRow gutter={[30, 30]}>
        <BaseCol xs={24} sm={24} lg={16} xl={16}>
          <BaseCard
            id="Tesla History"
            title={t('stock.tesla.title')}
            padding="1.25rem"
          >
            <HistoryDataGrid
              columns={columns}
              dataSource={tesla}
              loading={isLoading}
            />
          </BaseCard>
        </BaseCol>
        <BaseCol xs={24} sm={24} lg={8} xl={8}>
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
