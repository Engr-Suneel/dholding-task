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

const NvidiaDetailsPage: React.FC = () => {
  const { t } = useTranslation();
  const columns: any = invidiaColumn;

  const [invidias, setInvidias] = useState<IInvidia[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getInvidiaData().then((response) => {
      setInvidias(response);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <BaseRow gutter={[30, 30]}>
        <BaseCol span={16}>
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
        <BaseCol span={8}>
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
