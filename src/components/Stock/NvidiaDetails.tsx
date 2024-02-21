import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseRow } from '../../components/common/BaseRow/BaseRow';
import { BaseCol } from '../../components/common/BaseCol/BaseCol';
import { BaseCard } from '../../components/common/BaseCard/BaseCard';
import LineChartDetails from '../../components/Charts/LineChartDetails';
import { invidiaColumn } from '../../data-providers/invidia/invidia-column.data';
import { NewsTypeEnum } from '../../enums';
import { IInvidia, getInvidiaData } from '../../api/nvidia.api';
import HistoryDataGrid from './HistoryData/HistoryDataGrid';
import { lineChartData } from './MarketData/LineChartData';
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

const NvidiaDetailsPage: React.FC = () => {
  const { t } = useTranslation();
  const columns: any = invidiaColumn;

  const [invidias, setInvidias] = useState<IInvidia[]>([]);
  const [isLoading, setLoading] = useState(false);

  const discription = `
    NVIDIA Corporation accelerates computing to help solve the computational problems. 
    The Company has two segments. The Compute & Networking segment includes its data 
    center accelerated computing platform; networking; automotive artificial intelligence 
    (AI) cockpit, autonomous driving development agreements and autonomous vehicle solutions
  `;

  useEffect(() => {
    setLoading(true);
    getInvidiaData().then((response) => {
      setInvidias(response);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <CompanyWrapper>
        <BaseRow gutter={[30, 30]}>
          <BaseCol xs={24} sm={24} md={24} lg={12} xl={12}>
            <BaseCard id="Nvidia Company" padding="1.25rem">
              <CompanyDetails
                title={t('stock.nvidia.company')}
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
            <BaseCard id="Nvidia Watch List" padding="1.25rem">
              <CompanyWatchListDetails discription={discription} />
            </BaseCard>
          </BaseCol>
        </BaseRow>
      </CompanyWrapper>
      <BaseRow gutter={[30, 30]}>
        <BaseCol xs={24} sm={24} lg={16} xl={16}>
          <BaseCard
            id="Nvidia History"
            title={t('stock.nvidia.title')}
            padding="1.25rem"
          >
            <HistoryDataGrid
              columns={columns}
              dataSource={invidias}
              loading={isLoading}
            />
          </BaseCard>
        </BaseCol>
        <BaseCol xs={24} sm={24} lg={8} xl={8}>
          <BaseCard id="Nvidia Market" padding="1.25rem">
            <ChartWrapper>
              <Heading>Market</Heading>
              <LineChartDetails data={lineChartData} />
            </ChartWrapper>
            <NewsWrapper>
              <NewsDetails
                newsType={NewsTypeEnum.NVIDIA}
                title={t('stock.nvidia.newsTitle')}
              />
            </NewsWrapper>
          </BaseCard>
        </BaseCol>
      </BaseRow>
    </>
  );
};

export default NvidiaDetailsPage;
