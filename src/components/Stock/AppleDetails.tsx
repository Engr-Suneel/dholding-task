import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseRow } from '../../components/common/BaseRow/BaseRow';
import { BaseCol } from '../../components/common/BaseCol/BaseCol';
import { BaseCard } from '../../components/common/BaseCard/BaseCard';
import { appleColumn } from '../../data-providers/apple/apple-column.data';
import BarChartDetails from '../../components/Charts/BarChartDetails';
import { IApple, getAppleData } from '../../api/apple.api';
import { NewsTypeEnum } from '../../enums';
import { barChartData } from './MarketData/BarChartData';
import HistoryDataGrid from './HistoryData/HistoryDataGrid';
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

const AppleDetailsPage: React.FC = () => {
  const { t } = useTranslation();
  const columns: any = appleColumn;

  const [apples, setApples] = useState<IApple[]>([]);
  const [isLoading, setLoading] = useState(false);

  const discription = `
    Apple Inc. designs, manufactures, and markets smartphones, personal 
    computers, tablets, wearables, and accessories worldwide. The company 
    offers iPhone, a line of smartphones; Mac, a line of personal computers; 
    iPad, a line of multi-purpose tablets; and wearables, home, and accessories 
    comprising AirPods, Apple TV, Apple Watch, Beats products, and HomePod
  `;

  useEffect(() => {
    setLoading(true);
    getAppleData().then((response) => {
      setApples(response);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <CompanyWrapper>
        <BaseRow gutter={[30, 30]}>
          <BaseCol xs={24} sm={24} md={24} lg={12} xl={12}>
            <BaseCard id="Apple Company" padding="1.25rem">
              <CompanyDetails
                title={t('stock.apple.company')}
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
            <BaseCard id="Apple Watch List" padding="1.25rem">
              <CompanyWatchListDetails discription={discription} />
            </BaseCard>
          </BaseCol>
        </BaseRow>
      </CompanyWrapper>
      <BaseRow gutter={[30, 30]}>
        <BaseCol xs={24} sm={24} lg={16} xl={16}>
          <BaseCard
            id="Apple History"
            title={t('stock.apple.title')}
            padding="1.25rem"
          >
            <HistoryDataGrid
              columns={columns}
              dataSource={apples}
              loading={isLoading}
            />
          </BaseCard>
        </BaseCol>
        <BaseCol xs={24} sm={24} lg={8} xl={8}>
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
